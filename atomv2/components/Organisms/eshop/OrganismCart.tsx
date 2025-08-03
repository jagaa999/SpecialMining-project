// components/Organisms/OrganismCart.tsx

import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import RenderAtom from "../../Atoms/RenderAtom";
import BlockAffix from "../../Blocks/BlockAffix";
import BlockDiv from "../../Blocks/BlockDiv";
import PanelMain from "../../Panel/PanelMain";
import TextH2 from "../../Text/TextH2";
import TextH3 from "../../Text/TextH3";
import OrganismBasketListPanel from "./OrganismBasketListPanel";

export default function OrganismCart() {
  const { total } = useActionBasketButton({});

  return (
    <PanelMain className="grid grid-cols-12 gap-12">
      {/* Зүүн талд: Барааны жагсаалт */}
      <BlockDiv className="col-span-7 space-y-8">
        <TextH2 value="Таны сагс" />
        <OrganismBasketListPanel />
      </BlockDiv>

      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="col-span-5">
        <BlockAffix offsetTop={100}>
          <СагсныМэдээлэлActions total={total} />
        </BlockAffix>
      </BlockDiv>
    </PanelMain>
  );
}

const СагсныМэдээлэлActions = ({ total }: any) => {
  return (
    <BlockDiv className="bg-white px-brand-x py-brand-y rounded-brand border border-gray-200 space-y-8">
      <TextH3 value="Үнийн мэдээлэл" />

      <BlockDiv className="flex justify-between">
        <RenderAtom value={"Нийт дүн:"} type="text" className="" />
        <RenderAtom
          value={toMotoPrice(total)}
          type="text"
          className="font-semibold"
        />
      </BlockDiv>
      {/* Нэмэлт мэдээлэл оруулах боломжтой */}
      <BlockDiv className="mt-6 space-y-4">
        <RenderAtom
          value={"Захиалах"}
          type="button"
          className="bg-brand text-white py-2 text-base w-full shadow-none"
          url={{ href: "/checkout", className: "w-full" }}
          tooltip={{ title: "Дараагийн алхам" }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};
