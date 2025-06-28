import { toMotoPrice } from "atomv2/util/widgetHelper";
import { isArray, map, mapValues, reduce } from "lodash";
import { useRouter } from "next/navigation";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../../Atoms/RenderAtom";
import BlockDiv from "../../Blocks/BlockDiv";
import BlockFlexRow from "../../Blocks/BlockFlexRow";
import BlockScroll from "../../Blocks/BlockScroll";
import PanelMain from "../../Panel/PanelMain";
import PosTitle from "../../Position/PosTitle";
import TextH5 from "../../Text/TextH5";
import TextHtml from "../../Text/TextHtml";
import WidgetRenderForm from "../../Widgets/WidgetRenderForm";
import MoleculeBackButton from "atomv2/components/Molecules/MoleculeBackButton";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import MoleculeEmptyItemState from "atomv2/components/Molecules/MoleculeEmptyItemState";

export default function OrganismCheckout() {
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
          {/* Буцах товч */}
          <MoleculeBackButton
            item={{ value: "← Өмнөх алхам руу буцах" }}
            url={{ href: "/cart" }}
          />
          <ЗахиалгынМэдээлэл />
        </BlockFlexCol>
      </BlockDiv>

      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="col-span-6">
        <СагсныХатууПанель basketItems={basketItems} total={total} />
      </BlockDiv>
    </PanelMain>
  );
}

const ЗахиалгынМэдээлэл = () => {
  const router = useRouter();
  const { localConfig, setLocalConfig } = useConfig();
  // console.log("Захиалгын мэдээлэл:", localConfig);

  const orderFields: any[] = [
    {
      name: "customername",
      title: "Худалдан авагчийн нэр",
      placeholder: "Нэрээ бичнэ үү",
      type: "inputantd",
      rules: { required: "Заавал бичнэ үү" },
    },
    {
      name: "customerphone",
      title: "Утас",
      placeholder: "Утасны дугаараа оруулна уу",
      type: "inputantd",
      rules: { required: "Заавал бичнэ үү" },
    },
    {
      name: "customeremail",
      title: "Имэйл",
      placeholder: "Имэйл хаяг",
      type: "inputantd",
    },
    {
      name: "shippingaddress",
      title: "Хүргүүлэх хаяг",
      placeholder: "Хүргэлтийн хаягаа аль болох дэлгэрэнгүй бичээрэй",
      type: "textareaantd",
    },
  ];

  const onSubmit = (data: any) => {
    console.log("Захиалгын мэдээллийг хааш нь илгээх вэ?:", data);

    const orderInfo = reduce(
      orderFields,
      (item: any, field: any) => {
        const value = data[field.name];

        item[field.name] = {
          title: field.label || field.title,
          value,
        };

        return item;
      },
      {}
    );

    setLocalConfig({ ...localConfig, orderInfo });
    router.push("/payment");
  };

  console.log(
    "dfdsfdsf s",
    isArray(localConfig.orderInfo)
      ? localConfig.orderInfo.reduce((acc: any, curr: any) => {
          acc[curr.name] = curr.value;
          return acc;
        }, {})
      : {}
  );

  return (
    <>
      <WidgetRenderForm
        onSubmit={onSubmit}
        defaultValues={mapValues(localConfig.orderInfo, (item) => item?.value)}
        submitText="Захиалга илгээх"
        fields={orderFields}
        disableSubmitUntilValid={false}
      />
    </>
  );
};

const СагсныХатууПанель = ({ basketItems, total }: any) => {
  return (
    <BlockDiv className="bg-info/10 px-brand-x py-brand-y rounded-brand shadow-brand space-y-8">
      <TextH5 value="Таны сагс" />

      {basketItems.length <= 0 ? (
        <MoleculeEmptyItemState
          icon={{ value: "mdi-light:cart" }}
          title={{ value: "Хоосон" }}
          description={{ value: "Сагс хоосон байна" }}>
          <RenderAtom
            value={"Дэлгүүр →"}
            type="button"
            variant="action1"
            className="opacity-40"
            url={{ href: "/shop" }}
          />
        </MoleculeEmptyItemState>
      ) : (
        <>
          <BlockScroll className="pr-3 divide-gray-200 divide-y">
            {map(basketItems, (item: any, index: number) => (
              <BlockDiv
                key={item.id || index}
                className="flex flex-row items-center justify-between gap-4 py-2 w-full">
                <BlockFlexRow className="gap-2 w-full grow">
                  <RenderAtom
                    value={item.mainimage}
                    type="image"
                    className="object-contain rounded-none border border-gray-200 w-12 h-12"
                  />
                  <PosTitle
                    item={item}
                    className="text-xs text-gray-700 line-clamp-2"
                  />
                </BlockFlexRow>

                <RenderAtom
                  value={`${item.count} x ${toMotoPrice(item.price)}`}
                  type="text"
                  className="text-xs text-gray-600 block w-fit whitespace-nowrap"
                />
              </BlockDiv>
            ))}
          </BlockScroll>

          <BlockDiv className="flex justify-between">
            <TextHtml value="Нийт дүн:" />
            <TextHtml value={toMotoPrice(total)} />
          </BlockDiv>
        </>
      )}
    </BlockDiv>
  );
};
