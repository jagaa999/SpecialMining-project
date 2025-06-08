// components/Organisms/OrganismCart.tsx

import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../Blocks/BlockDiv";
import PanelContainer from "../Panel/PanelContainer";
import OrganismBasketListPanel from "./OrganismBasketListPanel";
import BlockAffix from "../Blocks/BlockAffix";
import RenderAtom from "../system/RenderAtom";

export default function OrganismCart() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <PanelContainer className="flex flex-col md:flex-row gap-12">
      {/* Зүүн талд: Барааны жагсаалт */}
      <BlockDiv className="w-full md:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Таны сагс</h2>
        <OrganismBasketListPanel />
      </BlockDiv>

      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="w-full md:w-1/3">
        <BlockAffix offsetTop={100}>
          <СагсныМэдээлэл total={total} />
        </BlockAffix>
      </BlockDiv>
    </PanelContainer>
  );
}

const СагсныМэдээлэл = ({ total }: any) => {
  return (
    <BlockDiv className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Үнийн мэдээлэл</h3>
      <BlockDiv className="flex justify-between mb-2">
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
          className="bg-teal-500 text-white py-3 text-lg"
          url={{ href: "/checkout", className: "w-full" }}
        />
        <RenderAtom
          value={"Төлбөр төлөх"}
          type="button"
          className="bg-sky-500 text-white py-3 text-lg"
          variant="primary"
        />
      </BlockDiv>
    </BlockDiv>
  );
};
