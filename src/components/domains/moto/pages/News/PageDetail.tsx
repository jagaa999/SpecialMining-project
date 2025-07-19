"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export interface NewsDetailType {
  id: string;
  title: string;
  description: string;
  image?: string;
  // нэмэлт талбарууд байж болно
}

export default function NewsDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data, send, error } = usePostToMotoApi();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      send(
        { apicommand: "detail", id },
        {
          path: "moto-news-v2",
          toast: { mute: true },
        }
      );
    };

    fetchData();
  }, [id]);

  console.log("🚀 ~ NewsDetailPage ~ data:", data);

  // if (loading) return <BlockDiv>Ачааллаж байна...</BlockDiv>;
  if (error) return <BlockDiv>{error}</BlockDiv>;
  if (!data) return null;

  return (
    <BlockDiv className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <button
          onClick={() => window.history.back()}
          className="mr-3 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          aria-label="Буцах">
          ← Буцах
        </button>
        <h1 className="text-2xl font-bold">{data.title}</h1>
      </div>
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
      )}
      <p className="text-gray-700 whitespace-pre-line">{data.description}</p>
    </BlockDiv>
  );
}
