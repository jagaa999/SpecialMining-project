// components/Organisms/OrganismCheckout.tsx

import { toMotoPrice } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import BlockScroll from "../Blocks/BlockScroll";
import PanelMain from "../Panel/PanelMain";
import PosTitle from "../Position/PosTitle";
import TextH5 from "../Text/TextH5";
import TextHtml from "../Text/TextHtml";
import WidgetRenderForm from "../Widgets/WidgetRenderForm";

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
        <ЗахиалгынМэдээлэл />
      </BlockDiv>

      {/* Баруун талд: Сагсны мэдээлэл */}
      <BlockDiv className="col-span-6">
        <СагсныХатууПанель basketItems={basketItems} total={total} />
      </BlockDiv>
    </PanelMain>
  );
}

const ЗахиалгынМэдээлэл = () => {
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <WidgetRenderForm
        onSubmit={onSubmit}
        defaultValues={{
          fullname: "",
          phone: "",
          email: "",
          address: "",
        }}
        submitText="Захиалга илгээх"
        fields={[
          {
            name: "fullname",
            label: "Овог, нэр",
            placeholder: "Овог, нэрээ бичнэ үү",
            type: "input",
            rules: { required: "Заавал бичнэ үү" },
          },
          {
            name: "phone",
            label: "Утас",
            placeholder: "Утасны дугаараа оруулна уу",
            type: "input",
            rules: { required: "Заавал бичнэ үү" },
          },
          {
            name: "email",
            label: "Имэйл",
            placeholder: "Имэйл хаяг",
            type: "input",
          },
          {
            name: "address",
            label: "Хаяг",
            placeholder: "Хүргэлтийн хаяг",
            type: "textarea",
          },
          {
            name: "SelectAntd",
            label: "Төлбөрийн хэлбэр",
            placeholder: "Овог, нэрээ бичнэ үү",
            type: "selectantd",
            options: [
              { label: "qPay", value: "qpay" },
              { label: "Бэлнээр", value: "cash" },
            ],
            rules: { required: "Төлбөрийн хэлбэр сонгоно уу" },
          },
          {
            name: "checkBox",
            label: "Төлбөрийн хэлбэр",
            type: "checkbox",
            options: [
              { label: "qPay", value: "qpay" },
              { label: "Бэлнээр", value: "cash" },
            ],
          },
          {
            name: "radioBox",
            label: "Төлбөрийн хэлбэр",
            type: "radio",
            options: [
              { label: "qPay", value: "qpay" },
              { label: "Бэлнээр", value: "cash" },
            ],
            rules: { required: "Төлбөрийн хэлбэр сонгоно уу" },
          },
        ]}
      />
    </>
  );
};

const СагсныХатууПанель = ({ basketItems, total }: any) => {
  return (
    <BlockDiv className="bg-info/10 px-brand-x py-brand-y rounded-brand shadow-brand space-y-8">
      <TextH5 value="Таны сагс" />

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
    </BlockDiv>
  );
};
