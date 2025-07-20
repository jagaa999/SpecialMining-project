"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import MotoNewsDetailBackgroundImageV3 from "../../Widget/News/Detail/MotoNewsDetailBackgroundImageV3";
import MotoNewsDetailBodyV3 from "../../Widget/News/Detail/MotoNewsDetailBodyV3";

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
    <>
      <MotoNewsDetailBackgroundImageV3 item={data} />
      <BackButton />
      <MotoNewsDetailBodyV3 item={data} />
    </>
  );
}

const BackButton = () => {
  return (
    <PanelMain className="py-0 pt-8 flex items-start justify-start w-full">
      <RenderAtom
        value="material-symbols-light:keyboard-arrow-left"
        type="icon"
        className={
          "bg-brand text-bg w-10 h-10 flex items-center justify-center rounded shadow-lg cursor-pointer hover:brightness-90 transition duration-300 ease-in-out text-lg"
        }
        animation={{ type: "slideUp" }}
        url={{ href: "/news" }}
        tooltip={{ title: "Жагсаалт руу буцах" }}
      />
    </PanelMain>
  );
};
