import { useEffect } from "react";

export function useUnsavedChangesWarning(
  isDirty: boolean,
  message: string = "Та орхих гэж байна уу? Та оруулсан өгөгдлөө алдаж болзошгүй."
) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isDirty) return;
      e.preventDefault();
      e.returnValue = message; // зарим browser-д заавал
      return message;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, message]);
}
