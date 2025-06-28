"use client";

import { Icon } from "@iconify/react";
import { Result } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import MoleculeOrderSummary from "atomv2/components/Molecules/MoleculeOrderSummary";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useRouter } from "next/navigation";

export default function OrganismPaymentТөлбөрЗахиалгаарАвчрах02After({
  setIsShowModal,
  result,
}: any) {
  const router = useRouter();
  return (
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
            router.push("/shop");
          }}
        />
      </BlockFlexRow>
    </BlockDiv>
  );
}
