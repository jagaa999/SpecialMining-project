import { useRef, useState } from "react";
import { useAntdMessageApi } from "src/config/context/AntdMessageContext";

type MotoApiPath =
  | "moto-order-v2"
  | "moto-product-v2"
  | "moto-ref-v2"
  | "moto-news-v2"
  | "moto-user-v2";

interface SendResult<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

interface FetcherResult<T> extends SendResult<T> {
  send: (
    payload: any,
    options: {
      path: MotoApiPath;
      query?: Record<string, string>;
      retries?: number;
      retryDelayMs?: number;
      toast?: {
        loading?: string;
        success?: string;
        error?: string;
        mute?: boolean;
      };
    }
  ) => Promise<SendResult<T>>;
  abort: () => void;
}

export function usePostToMotoApi<T = any>(): FetcherResult<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const [messageApi] = useAntdMessageApi();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const send = async (
    body: any,
    {
      path,
      query = {},
      retries = 0,
      retryDelayMs = 1000,
      toast,
    }: {
      path: MotoApiPath;
      query?: Record<string, string>;
      retries?: number;
      retryDelayMs?: number;
      toast?: {
        loading?: string;
        success?: string;
        error?: string;
        mute?: boolean;
      };
    }
  ): Promise<SendResult<T>> => {
    // 1. Эхлэх үед loading state-ийг идэвхжүүлэх
    setLoading(true);
    setError(undefined);
    setData(undefined);

    const {
      loading: toastLoading = "Үйлдэл хийгдэж байна...",
      success: toastSuccess = "Амжилттай!",
      error: toastError = "Алдаа гарлаа",
      mute = false,
    } = toast || {};

    const queryString = new URLSearchParams({ path, ...query }).toString();
    const url = `/api/moto-api?${queryString}`;

    let attempts = 0;
    const hideLoading = !mute ? messageApi.loading(toastLoading, 0) : undefined;

    try {
      while (attempts <= retries) {
        try {
          const controller = new AbortController();
          abortControllerRef.current = controller;

          // 2. Fetch хийх үед loading state идэвхитэй байна
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: controller.signal,
          });

          if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

          const json = (await res.json()) as T;

          // 3. Амжилттай дууссан тохиолдолд loading state-ийг идэвхгүй болгох
          setLoading(false);
          setData(json);
          hideLoading?.();

          !mute &&
            messageApi.open({
              type: "success",
              content: toastSuccess,
            });
          return { data: json, loading: false };
        } catch (err: any) {
          const isAbort = err.name === "AbortError";
          const errorMsg = isAbort
            ? "Request aborted"
            : err.message ?? "Unknown error";

          if (attempts === retries || isAbort) {
            // 4. Алдаа гарсан тохиолдолд loading state-ийг идэвхгүй болгох
            setLoading(false);
            setError(errorMsg);
            hideLoading?.();
            !mute && messageApi.error(toastError || errorMsg);
            return { error: errorMsg, loading: false };
          }

          await delay(retryDelayMs);
          attempts++;
        }
      }

      // 5. Retry дууссан тохиолдолд
      setLoading(false);
      return { error: "Retry attempts exhausted", loading: false };
    } catch (err) {
      // 6. Ямар нэгэн хүндрэл гарсан тохиолдолд
      setLoading(false);
      hideLoading?.();
      return { error: "Unexpected error occurred", loading: false };
    }
  };

  const abort = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      // 7. Abort хийгдсэн тохиолдолд loading state-ийг идэвхгүй болгох
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    send,
    abort,
  };
}
