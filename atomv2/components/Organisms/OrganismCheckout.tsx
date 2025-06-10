// components/Organisms/OrganismCheckout.tsx

import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockScroll from "../Blocks/BlockScroll";
import PanelContainer from "../Panel/PanelContainer";
import WidgetRenderForm from "../Widgets/WidgetRenderForm";

export default function OrganismCheckout() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <>
      <PanelContainer className="py-24">
        <BlockDiv className="flex flex-col md:flex-row gap-6 w-full mx-auto">
          {/* Зүүн талд: Захиалгын форм */}
          <BlockDiv className="w-full md:w-1/2">
            <ЗахиалгынМэдээлэл />
          </BlockDiv>

          {/* Баруун талд: Сагсны мэдээлэл */}
          <BlockDiv className="w-full md:w-1/2">
            <СагсныХатууПанель basketItems={basketItems} total={total} />
          </BlockDiv>
        </BlockDiv>
      </PanelContainer>
    </>
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
          fullname: "Жаргал_Т",
          phone: "",
          email: "",
          address: "",
          paymentMethod: "cash",
          sdfdsfMethod: "",
          dsfsd: "",
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
            name: "paymentMethod",
            label: "Төлбөрийн хэлбэр",
            type: "select",
            options: [
              { label: "qPay", value: "qpay" },
              { label: "Бэлнээр", value: "cash" },
            ],
            rules: { required: "Төлбөрийн хэлбэр сонгоно уу" },
          },
          {
            name: "checkddd",
            label: "Төлбөрийн хэлбэр",
            type: "checkbox",
            options: [
              { label: "qPay", value: "qpay" },
              { label: "Бэлнээр", value: "cash" },
            ],
          },
          {
            name: "radiosss",
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
    <>
      <BlockDiv className="bg-gray-100 px-3 py-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Таны сагс</h3>
        <BlockScroll className="pr-3 divide-gray-200 divide-y">
          {basketItems.map((item: any, index: number) => (
            <BlockDiv
              key={item.id || index}
              className="flex flex-row items-center justify-between gap-4 py-2">
              <BlockDiv className="flex flex-row gap-2 items-center">
                <img
                  src={item.mainimage || "/placeholder.png"}
                  alt={item.title}
                  className="object-contain rounded border border-gray-200 w-6 h-6"
                />

                <RenderAtom
                  value={item.title}
                  type="text"
                  className="text-xs text-gray-600 line-clamp-2"
                />
              </BlockDiv>

              <RenderAtom
                value={`${item.count} x ${toMotoPrice(item.price)}`}
                type="text"
                className="text-sm text-gray-600 block w-full whitespace-nowrap"
              />
            </BlockDiv>
          ))}
        </BlockScroll>

        <BlockDiv className="flex justify-between mt-4 text-gray-700 text-base font-medium">
          <span>Нийт дүн:</span>
          <span>{toMotoPrice(total)}₮</span>
        </BlockDiv>
      </BlockDiv>
    </>
  );
};
