// components/Organisms/OrganismCheckout.tsx

import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useState } from "react";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../Blocks/BlockDiv";
import BlockScroll from "../Blocks/BlockScroll";
import RenderAtom from "../system/RenderAtom";
import PanelContainer from "../Panel/PanelContainer";
import { FormProvider, useForm } from "react-hook-form";
import MoleculeFormField from "../Molecules/MoleculeFormField";

export default function OrganismCheckout() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ddddfdsfdsfsdsfdsf ", e.target);
    const { name, value } = e.target;
    console.log("ddddfdsfdsfs", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Захиалгын мэдээллийг илгээх логик
    console.log("Захиалга илгээгдлээ:", {
      formData,
      paymentMethod,
      basketItems,
    });
  };

  return (
    <>
      <PanelContainer className="py-24">
        <BlockDiv className="flex flex-col md:flex-row gap-6 w-full mx-auto">
          {/* Зүүн талд: Захиалгын форм */}
          <BlockDiv className="w-full md:w-1/2">
            <ЗахиалгынМэдээлэл
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </BlockDiv>

          {/* Баруун талд: Сагсны мэдээлэл */}
          <BlockDiv className="w-full md:w-1/2">
            <СагсныХатууПанель basketItems={basketItems} total={total} />
          </BlockDiv>
        </BlockDiv>

        <RenderAtom type="line" variant="solid" className="my-16" />

        <BlockDiv className="w-full flex flex-col gap-8">
          {/* Төлбөрийн сонголт */}
          <ТөлбөрийнСонголт
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          {/* Захиалга илгээх товч */}
          <RenderAtom
            value={"Захиалга илгээх"}
            type="button"
            className="bg-teal-500 py-3 text-lg"
            variant="primary"
            onClick={handleSubmit}
          />
        </BlockDiv>
      </PanelContainer>
    </>
  );
}

const ЗахиалгынМэдээлэл = ({ formData, handleInputChange }: any) => {
  const methods = useForm({
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Захиалгын мэдээлэл</h2>

        <MoleculeFormField
          name="fullname"
          label="Овог, нэр"
          placeholder="Овог, нэрээ бичнэ үү"
          type="input"
          rules={{ required: true }}
        />
        <MoleculeFormField
          name="phone"
          label="Утас"
          placeholder="Утасны дугаараа оруулна уу"
          type="input"
          rules={{ required: true }}
        />
        <MoleculeFormField
          name="email"
          label="Имэйл"
          placeholder="Имэйл хаяг"
          type="input"
        />
        <MoleculeFormField
          name="address"
          label="Хаяг"
          placeholder="Хүргэлтийн хаяг"
          type="textarea"
        />

        <RenderAtom
          type="button"
          value="Захиалга илгээх"
          variant="primary"
          className="w-full py-3 text-lg bg-teal-500 hover:bg-teal-600 text-white rounded"
          onClick={methods.handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Захиалгын мэдээлэл</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="fullname"
          placeholder="Овог, нэр"
          value={formData.fullname}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Утасны дугаар"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Имэйл хаяг"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Хүргэлтийн хаяг"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </form>
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

const ТөлбөрийнСонголт = ({ paymentMethod, setPaymentMethod }: any) => {
  return (
    <BlockDiv className="mt-6 ">
      <h3 className="text-lg font-semibold mb-4">Төлбөрийн сонголт</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="qpay"
            checked={paymentMethod === "qpay"}
            onChange={() => setPaymentMethod("qpay")}
            className="mr-2"
          />
          QPay
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="mr-2"
          />
          Бэлнээр (Хүргэлтийн үед)
        </label>
      </div>
    </BlockDiv>
  );
};
