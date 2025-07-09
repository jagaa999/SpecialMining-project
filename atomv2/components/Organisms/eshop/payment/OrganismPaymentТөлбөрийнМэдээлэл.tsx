import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockModal from "atomv2/components/Blocks/BlockModal";
import MoleculeEmptyItemState from "atomv2/components/Molecules/MoleculeEmptyItemState";
import PosTitle from "atomv2/components/Position/PosTitle";
import TextH3 from "atomv2/components/Text/TextH3";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { map } from "lodash";
import { useState } from "react";
import { useToggle } from "react-use";
import OrganismPaymentТөлбөрQPay from "./OrganismPaymentТөлбөрQPay";
import OrganismPaymentТөлбөрДансаар from "./OrganismPaymentТөлбөрДансаар";
import OrganismPaymentТөлбөрЗахиалгаарАвчрах from "./OrganismPaymentТөлбөрЗахиалгаарАвчрах";

export default function OrganismPaymentТөлбөрийнМэдээлэл() {
  const [isShowModal, setIsShowModal] = useToggle(false);
  const [number, setNumber] = useState(0);

  const { basketItems } = useActionBasketButton({});

  const paymentOptions = [
    { title: "Захиалгаар авах", icon: "material-symbols:payments-rounded" },
    { title: "QPay", icon: "material-symbols:qr-code-2-rounded" },
    { title: "Дансаар", icon: "material-symbols:account-balance-rounded" },
  ];

  return (
    <BlockFlexCol className="gap-8">
      <TextH3 value="Төлбөрийн мэдээлэл" />

      {basketItems.length <= 0 ? (
        <MoleculeEmptyItemState
          icon={{ value: "mdi-light:alert-circle" }}
          title={{ value: "Анхаар" }}
          description={{ value: "Сагс хоосон тул төлбөр хийх боломжгүй" }}>
          <RenderAtom
            value={"Дэлгүүр рүү очих →"}
            type="button"
            variant="action1"
            className="opacity-40"
            url={{ href: "/shop" }}
          />
        </MoleculeEmptyItemState>
      ) : (
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
      )}

      <BlockModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        width={450}
        destroyOnHidden={true}>
        {number === 0 && (
          <OrganismPaymentТөлбөрЗахиалгаарАвчрах
            setIsShowModal={setIsShowModal}
          />
        )}
        {number === 1 && (
          <OrganismPaymentТөлбөрQPay setIsShowModal={setIsShowModal} />
        )}
        {number === 2 && (
          <OrganismPaymentТөлбөрДансаар setIsShowModal={setIsShowModal} />
        )}
      </BlockModal>
    </BlockFlexCol>
  );
}
