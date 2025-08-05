"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import BlockModal from "atomv2/components/Blocks/BlockModal";
import BlockScroll from "atomv2/components/Blocks/BlockScroll";
import BlockTab from "atomv2/components/Blocks/BlockTab";
import MoleculeCard03 from "atomv2/components/Molecules/MoleculeCard03";
import OrganismBasketDrawerSimple from "atomv2/components/Organisms/eshop/OrganismBasketDrawerSimple";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { extractObjectMain } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useState } from "react";
import { useEgulenProductsForOrder } from "src/config/hooks/egulen/useEgulenProductsForOrder";
import QpayCheckoutPanel from "../Widget/QpayCheckoutPanel";

export default function CaffemPageShop() {
  // `products` нь Sector[] гэж үзье
  return (
    <BlockDiv className="px-10 py-10">
      <BlockHalf type="80">
        <BlockDiv className="h-screen">
          <BaraanuudtaiLanguu />
          {/* dsfdsf */}
        </BlockDiv>
        <TulburTuluxQPay />
      </BlockHalf>
    </BlockDiv>
  );
}

const BaraanuudtaiLanguu = () => {
  const { products, loading, error } = useEgulenProductsForOrder();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  console.log("dsfsdfdsfsd", products);

  return (
    <BlockTab
      titleList={map(products, (s) => ({ title: s.name }))}
      customProps={{ titleBlockClassName: "mb-6" }}>
      {map(products, (itemsector) => (
        <BlockTab
          key={itemsector.name}
          titleList={map(itemsector.categories, (c) => ({ title: c.name }))}
          customProps={{ titleBlockClassName: "mb-4" }}>
          {map(itemsector.categories, (itemcategory, index) => (
            <BlockScroll
              key={itemcategory?.id || index}
              className="grid grid-cols-3 gap-8">
              {map(itemcategory.products, (itemproduct) => {
                return (
                  <CaffemProductCard
                    key={itemproduct?.id || index}
                    item={itemproduct}
                    category={itemcategory}
                    sector={itemsector}
                  />
                );
              })}
            </BlockScroll>
          ))}
        </BlockTab>
      ))}
    </BlockTab>
  );
};

const CaffemProductCard = ({
  item,
  category,
  sector,
}: {
  item: any;
  category: any;
  sector: any;
}) => {
  const itemReady = {
    ...item,
    image: undefined,
    mainimage: `${item.image_prefix}${item.image}`,
  };
  const { isInBasket, addNumber } = useActionBasketButton({
    item: {
      ...extractObjectMain(itemReady),
      itemToOrder: {
        id: item?.id,
        cat_id: category?.category_id,
        sector_id: sector?.sector_id,
        category_name: category?.name,
        product_name: item?.title,
        other_name: item?.other_name,
        quantity: "1",
        price: item?.price,
        note: "",
        bar_code: item?.bar_code,
        plu_code: item?.plu_code,
      },
    },
    convertToSimple: false,
  });
  return (
    <MoleculeCard03
      outerBlock={{
        onClick: () => {
          // toggleItem();
          addNumber();
        },
        className: `cursor-pointer ${
          isInBasket ? "border-brand shadow-lg" : ""
        }`,
      }}
      item={itemReady}
    />
  );
};

const TulburTuluxQPay = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <OrganismBasketDrawerSimple
        basketButton={{
          value: "Төлөх",
          onClick: () => {
            console.log("Төлөх даржээ");
            setIsShowModal(true);
          },
          url: {},
        }}
      />
      <BlockModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        width={450}
        destroyOnHidden={true}>
        <QpayCheckoutPanel />
      </BlockModal>
    </>
  );
};
