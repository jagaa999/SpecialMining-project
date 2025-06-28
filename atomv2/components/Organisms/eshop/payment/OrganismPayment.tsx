import BlockDiv from "../../../Blocks/BlockDiv";
import BlockFlexCol from "../../../Blocks/BlockFlexCol";
import MoleculeBackButton from "../../../Molecules/MoleculeBackButton";
import PanelMain from "../../../Panel/PanelMain";
import OrganismPaymentЗахиалгынМэдээлэл from "./OrganismPaymentЗахиалгынМэдээлэл";
import OrganismPaymentСагсныХатууПанель from "./OrganismPaymentСагсныХатууПанель";
import OrganismPaymentТөлбөрийнМэдээлэл from "./OrganismPaymentТөлбөрийнМэдээлэл";

export default function OrganismPayment() {
  return (
    <PanelMain className="grid grid-cols-12 gap-12">
      {/* Зүүн талд: Захиалгын форм */}
      <BlockDiv className="col-span-6">
        <BlockFlexCol className="gap-16">
          {/* Буцах товч */}
          <MoleculeBackButton
            item={{ value: "← Өмнөх алхам руу буцах" }}
            url={{ href: "/checkout" }}
          />

          {/* Захиалгын хатуу мэдээлэл */}
          <OrganismPaymentЗахиалгынМэдээлэл />

          {/* Төлбөрийн динамик мэдээлэл */}
          <OrganismPaymentТөлбөрийнМэдээлэл />
        </BlockFlexCol>
      </BlockDiv>

      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="col-span-6">
        {/* Сагсны хатуу мэдээлэл */}
        <OrganismPaymentСагсныХатууПанель />
      </BlockDiv>
    </PanelMain>
  );
}
