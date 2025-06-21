// components/Organisms/OrganismPayment.tsx

import "@ant-design/v5-patch-for-react-19";
import { Icon } from "@iconify/react";
import { Descriptions, Result } from "antd";
import { useActionMakeOrder } from "atomv2/hooks/actions/useActionMakeOrder";
import {
  generateMemorable5DigitId,
  toMotoPrice,
} from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useState } from "react";
import { useToggle } from "react-use";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import BlockModal from "../Blocks/BlockModal";
import BlockShowOnlyOne from "../Blocks/BlockShowOnlyOne";
import MoleculeOrderSummary from "../Molecules/MoleculeOrderSummary";
import PanelMain from "../Panel/PanelMain";
import PosTitle from "../Position/PosTitle";
import TextH3 from "../Text/TextH3";
import TextH4 from "../Text/TextH4";
import TextH5 from "../Text/TextH5";
import TextHtml from "../Text/TextHtml";

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
  const [number, setNumber] = useState(0);

  const paymentOptions = [
    { title: "Захиалгаар авах", icon: "material-symbols:payments-rounded" },
    { title: "QPay", icon: "material-symbols:qr-code-2-rounded" },
    { title: "Дансаар", icon: "material-symbols:account-balance-rounded" },
  ];

  return (
    <BlockFlexCol className="gap-8">
      <TextH3 value="Төлбөрийн мэдээлэл" />
      <BlockFlexCol className="gap-3">
        {map(paymentOptions, (item: any, index: number) => {
          return (
            <BlockDiv
              key={item.label || index}
              className="w-full bg-brand/10 text-fg p-3 rounded-brand border border-brand/30 cursor-pointer hover:text-white hover:bg-brand transition-colors flex items-center justify-start gap-4 pl-16"
              onClick={() => {
                setNumber(index);
                setIsShowModal(true);
              }}>
              <RenderAtom type="icon" value={item.icon} className="text-lg" />
              <PosTitle item={item} />
            </BlockDiv>
          );
        })}
      </BlockFlexCol>

      <BlockModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        width={450}
        destroyOnClose={true}>
        {number === 0 && <ЗахиалгаарАвах setIsShowModal={setIsShowModal} />}
        {number === 1 && <QPay setIsShowModal={setIsShowModal} />}
        {number === 2 && <Дансаар setIsShowModal={setIsShowModal} />}
      </BlockModal>
    </BlockFlexCol>
  );
};

const ЗахиалгаарАвах = ({ setIsShowModal }: any) => {
  const [index, setIndex] = useState(0);
  const [result, setResult]: any = useState();
  const { actionMakeOrder } = useActionMakeOrder();
  const [code] = useState(generateMemorable5DigitId());
  const { localConfig } = useConfig();
  const basketList = localConfig.basketList;
  const orderInfo = localConfig.orderInfo;
  const total = basketList.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="Захиалгаар авах" />
      <BlockShowOnlyOne index={index}>
        <BlockDiv className="space-y-8">
          {/* Захиалгын мэдээлэл */}
          <BlockDiv className="space-y-4 rounded-lg border border-muted/30 border-dashed p-4  bg-white">
            <MoleculeOrderSummary
              items={[
                {
                  label: "Захиалгын дугаар",
                  value: code,
                },
                {
                  label: "Нийт үнэ",
                  value: toMotoPrice(total),
                },
                {
                  label: "Худалдан авагч",
                  value: orderInfo?.customername?.value,
                },
              ]}
            />

            <p className="text-xs text-info">
              ✔ Бид тантай утсаар холбогдож, захиалгын мэдээллийг баталгаажуулах
              болно.
            </p>
            <p className="text-xs text-warning">
              ⚠ Захиалгыг илгээсний дараа мэдээлэл буцаах боломжгүй тул дахин
              шалгана уу.
            </p>
          </BlockDiv>

          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"Cancel"}
              type="button"
              variant="action1"
              onClick={() => setIsShowModal(false)}
            />
            <RenderAtom
              onClick={async () => {
                const result = await actionMakeOrder({
                  code,
                  basketList,
                  orderInfo,
                  total,
                });
                console.log("Захиалга амжилттай:", result);
                setResult(result);
                setIndex(1);
              }}
              value={"OK"}
              type="button"
              variant="action2"
            />
          </BlockFlexRow>
        </BlockDiv>
        <BlockDiv className="space-y-8">
          <Result
            icon={
              <BlockDiv className="flex justify-center items-center">
                <Icon
                  icon="solar:check-circle-bold-duotone"
                  className="text-green-500 animate-waving-hand"
                  width={120}
                  height={120}
                />
              </BlockDiv>
            }
            subTitle="Захиалга өгсөн танд баяралалаа."
            extra={
              <MoleculeOrderSummary
                items={[
                  {
                    label: "Захиалгын дугаар",
                    value: result?.data?.data?.code,
                  },
                  {
                    label: "Нийт үнэ",
                    value: toMotoPrice(result?.data?.data?.price),
                  },
                  {
                    label: "Худалдан авагч",
                    value: result?.data?.data?.customername,
                  },
                  {
                    label: "Огноо",
                    value: result?.data?.data?.modifieddate,
                  },
                ]}
              />
            }
          />
          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"OK"}
              type="button"
              variant="action1"
              onClick={() => {
                setIsShowModal(false);
              }}
            />
          </BlockFlexRow>
        </BlockDiv>
      </BlockShowOnlyOne>
    </BlockDiv>
  );
};

const QPay = ({ setIsShowModal }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="QPay төлбөр" />

      <BlockShowOnlyOne index={index}>
        <BlockDiv className="space-y-8">
          <p className="text-sm text-muted">
            QPay төлбөрийн системийг ашиглан төлбөрөө хялбархан гүйцэтгэнэ үү.
          </p>

          <RenderAtom
            value={
              "Уучлаарай, одоогоор QPay холбоогүй байгаа тул та бусад сонголтоор захиалгаа хийнэ үү"
            }
            type="text"
            className="text-error text-sm"
          />

          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"Cancel"}
              type="button"
              variant="action1"
              onClick={() => {
                setIndex(1);
                // setIsShowModal(false);
              }}
            />
            {/* <RenderAtom
          onClick={() => {
            setIsShowModal(false);
          }}
          value={"OK"}
          type="button"
          variant="action2"
        /> */}
          </BlockFlexRow>
        </BlockDiv>
        <BlockDiv className="space-y-8">
          <Result status="warning" subTitle="Та дараа дахин оролдоорой." />
          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"Ойлголоо"}
              type="button"
              variant="action1"
              onClick={() => {
                setIsShowModal(false);
              }}
            />
          </BlockFlexRow>
        </BlockDiv>
      </BlockShowOnlyOne>
    </BlockDiv>
  );
};
const Дансаар = ({ setIsShowModal }: any) => {
  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="Дансаар шилжүүлэх" />
      <p className="text-sm text-muted">
        Дансы мэдээллийн дагуу төлбөрөө хялбархан шилжүүлж болно.
      </p>

      <RenderAtom
        value={
          "Уучлаарай, одоогоор Дансны мэдээлэл тодорхойгүй байгаа тул та бусад сонголтоор захиалгаа хийнэ үү"
        }
        type="text"
        className="text-error text-sm"
      />

      <BlockFlexRow className="gap-2 justify-end">
        <RenderAtom
          value={"Cancel"}
          type="button"
          variant="action1"
          onClick={() => setIsShowModal(false)}
        />
        {/* <RenderAtom
          onClick={() => {
            setIsShowModal(false);
          }}
          value={"OK"}
          type="button"
          variant="action2"
        /> */}
      </BlockFlexRow>
    </BlockDiv>
  );
};

const ЗахиалгынМэдээлэл = () => {
  const { localConfig } = useConfig();
  const orderInfo = localConfig.orderInfo || {};
  // console.log("Захиалгын мэдээлэл:", { localConfig, orderInfo });

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
