// components/Organisms/OrganismPayment.tsx

import { Descriptions } from "antd";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import PanelMain from "../Panel/PanelMain";
import PosTitle from "../Position/PosTitle";
import TextH5 from "../Text/TextH5";
import TextHtml from "../Text/TextHtml";
import BlockModal from "../Blocks/BlockModal";
import { useToggle } from "react-use";
import TextH3 from "../Text/TextH3";

export default function OrganismPayment() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <PanelMain className="grid grid-cols-12 gap-12">
      {/* Зүүн талд: Захиалгын форм */}
      <BlockDiv className="col-span-6">
        <BlockFlexCol className="gap-16">
          <ЗахиалгынМэдээлэл />
          <ТөлбөрийнМэдээлэл />
        </BlockFlexCol>
      </BlockDiv>
      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="col-span-6">
        <СагсныХатууПанель basketItems={basketItems} total={total} />
      </BlockDiv>
    </PanelMain>
  );
}

const ТөлбөрийнМэдээлэл = () => {
  const [isShowModal, setIsShowModal] = useToggle(false);

  return (
    <BlockFlexCol className="gap-8">
      <TextH3 value="Төлбөрийн мэдээлэл" />
      <BlockFlexCol className="gap-3">
        {map(["Бэлэн мөнгө", "QPay", "Дансаар"], (item: any, index: number) => (
          <p
            key={item?.id || index}
            className="w-full bg-brand/10 text-fg p-3 rounded-brand border border-brand/30 text-center cursor-pointer hover:brightness-95 transition-colors"
            onClick={() => setIsShowModal(true)}>
            {item}
          </p>
        ))}
      </BlockFlexCol>

      <BlockModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        width={450}>
        dsfdsfd sfdsf
      </BlockModal>
    </BlockFlexCol>
  );
};

const ЗахиалгынМэдээлэл = () => {
  const { localConfig } = useConfig();
  const orderInfo = localConfig.orderInfo || {};
  console.log("Захиалгын мэдээлэл:", { localConfig, orderInfo });

  return (
    <BlockFlexCol className="gap-8">
      <TextH3 value="Захиалгын мэдээлэл" />
      <Descriptions column={1} labelStyle={{ fontWeight: 400, width: 180 }}>
        {map(orderInfo, (item: any, index: number) => (
          <Descriptions.Item
            key={item?.id || index}
            label={item.label || item?.title || item?.name}>
            {item?.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </BlockFlexCol>
  );
};

const СагсныХатууПанель = ({ basketItems, total }: any) => {
  return (
    <BlockDiv className="bg-info/10 px-brand-x py-brand-y rounded-brand shadow-brand space-y-8">
      <TextH5 value="Таны захиалга" />

      <BlockDiv className="grid grid-cols-4 gap-2">
        {map(basketItems, (item: any, index: number) => (
          <BlockDiv
            key={item.id || index}
            className="flex flex-row items-center justify-between gap-4 py-2 w-full">
            <BlockFlexCol className="gap-2 w-full">
              <RenderAtom
                value={item.mainimage}
                type="image"
                className="object-cover object-center rounded-brand border border-gray-200 w-full aspect-square"
              />
              <PosTitle
                item={item}
                className="text-xs text-gray-700 line-clamp-2"
              />
              <RenderAtom
                value={`${item.count} x ${toMotoPrice(item.price)}`}
                type="text"
                className="text-xs text-gray-600 block w-fit whitespace-nowrap"
              />
            </BlockFlexCol>
          </BlockDiv>
        ))}
      </BlockDiv>

      <BlockDiv className="flex justify-between">
        <TextHtml value="Нийт дүн:" />
        <TextHtml value={toMotoPrice(total)} />
      </BlockDiv>
    </BlockDiv>
  );
};
