import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import MoleculeBackButton from "atomv2/components/Molecules/MoleculeBackButton";
import OrganismPaymentСагсныХатууПанель from "atomv2/components/Organisms/eshop/payment/OrganismPaymentСагсныХатууПанель";
import TextH3 from "atomv2/components/Text/TextH3";
import { map } from "lodash";
import { useEgulenPaymentMethods } from "src/config/hooks/egulen/useEgulenPaymentMethods";

export default function CaffemPagePayment() {
  return (
    <BlockDiv className="px-10 py-10">
      <BlockDiv className="grid grid-cols-12 gap-12">
        {/* Зүүн талд:  */}
        <BlockDiv className="col-span-6">
          <BlockFlexCol className="gap-16">
            {/* Буцах товч */}
            <MoleculeBackButton
              item={{ value: "← Өмнөх алхам руу буцах" }}
              url={{ href: "/shop" }}
            />

            {/* Төлбөрийн динамик мэдээлэл */}
            <EgulenПосPaymentMethods />
          </BlockFlexCol>
        </BlockDiv>

        {/* Баруун талд: Сагсны мэдээлэл */}
        <BlockDiv className="col-span-6">
          {/* Сагсны хатуу мэдээлэл */}
          <OrganismPaymentСагсныХатууПанель />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
}

const EgulenПосPaymentMethods = () => {
  const { methods, loading, error } = useEgulenPaymentMethods();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  // console.log("dsfsdfdsfsd", methods);

  return (
    <BlockFlexCol className="gap-8 p-4">
      <TextH3 value="Төлбөрийн мэдээлэл" />
      <BlockDiv className="grid md:grid-cols-2 gap-4">
        {map(methods, (item: any, index: number) => (
          <BlockDiv
            key={item?.id || index}
            className="p-4 rounded-2xl shadow-md border border-gray-100 bg-white flex flex-col gap-2">
            <RenderAtom
              value={item.account_name}
              type="text"
              className="text-lg font-bold"
            />
            <RenderAtom
              value={`Үлдэгдэл: ${Number(
                item.current_amount
              ).toLocaleString()} ${item.currency_code?.toUpperCase()}`}
              type="text"
              className="text-sm text-gray-500"
            />
            <RenderAtom
              value={`Төрөл: ${item.type}`}
              type="text"
              className="text-xs text-muted"
            />
          </BlockDiv>
        ))}
      </BlockDiv>
    </BlockFlexCol>
  );
};
