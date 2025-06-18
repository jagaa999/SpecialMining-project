"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";

export default function AikidoContactPanel() {
  return (
    <BlockDiv
      type="section"
      className="bg-slate-300 text-white text-center py-32 flex flex-col gap-12 items-center">
      <RenderAtom
        value="Та ч бас бидэнтэй нэгдээрэй."
        type="text"
        as="h2"
        className=""
      />
      <RenderAtom
        value="Айкидо бол амьдралын ур чадварыг заадаг. Өнөөдөр л эхэл!"
        type="text"
        className="text-lg"
      />
      <RenderAtom
        value={"Хичээлд бүртгүүлэх"}
        type="button"
        className="bg-white text-brand"
        url={{ href: "/register" }}
      />
    </BlockDiv>
  );
}
