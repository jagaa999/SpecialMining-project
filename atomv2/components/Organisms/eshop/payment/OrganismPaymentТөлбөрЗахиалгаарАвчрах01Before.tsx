"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import MoleculeOrderSummary from "atomv2/components/Molecules/MoleculeOrderSummary";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { useActionMakeOrder } from "atomv2/hooks/actions/useActionMakeOrder";
import {
  generateMemorable5DigitId,
  toMotoPrice,
} from "atomv2/util/widgetHelper";
import { useState } from "react";
import { useConfig } from "src/config/context/ConfigContext";

export default function OrganismPaymentТөлбөрЗахиалгаарАвчрах01Before({
  setIsShowModal,
  setIndex,
  setResult,
}: any) {
  const [code] = useState(generateMemorable5DigitId());
  const { localConfig } = useConfig();
  const basketList = localConfig.basketList;
  const orderInfo = localConfig.orderInfo;
  const total = basketList.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <BlockDiv className="space-y-8">
      <ДөрвөлжинДоторхМэдээллийнХэсэг
        code={code}
        total={total}
        orderInfo={orderInfo}
      />

      <ЗахиалгынҮйлдлүүд
        setIsShowModal={setIsShowModal}
        setResult={setResult}
        setIndex={setIndex}
        code={code}
        basketList={basketList}
        orderInfo={orderInfo}
        total={total}
      />
    </BlockDiv>
  );
}

const ДөрвөлжинДоторхМэдээллийнХэсэг = ({ code, total, orderInfo }: any) => {
  return (
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

      <RenderAtom
        value={
          "✔ Бид тантай утсаар холбогдож, захиалгын мэдээллийг баталгаажуулах болно."
        }
        type="text"
        variant="info"
        className="text-xs"
      />

      <RenderAtom
        value={
          "⚠ Захиалгыг илгээсний дараа мэдээлэл буцаах боломжгүй тул дахин шалгана уу."
        }
        type="text"
        variant="warning"
        className="text-xs"
      />
    </BlockDiv>
  );
};

const ЗахиалгынҮйлдлүүд = ({
  setIsShowModal,
  setResult,
  setIndex,
  code,
  basketList,
  orderInfo,
  total,
}: any) => {
  const { actionMakeOrder, loading } = useActionMakeOrder();
  const { clearAll } = useActionBasketButton({});

  return (
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
          //Одоо энд сагс, захиалгаа устгана
          clearAll();
        }}
        value={"OK"}
        type="button"
        variant="action2"
        spinning={{ spinning: loading }}
      />
    </BlockFlexRow>
  );
};
