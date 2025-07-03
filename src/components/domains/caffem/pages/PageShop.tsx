"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import BlockModal from "atomv2/components/Blocks/BlockModal";
import BlockScroll from "atomv2/components/Blocks/BlockScroll";
import BlockTab from "atomv2/components/Blocks/BlockTab";
import MoleculeCard03 from "atomv2/components/Molecules/MoleculeCard03";
import OrganismBasketDrawerSimple from "atomv2/components/Organisms/eshop/OrganismBasketDrawerSimple";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
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
          <БараануудтайЛангуу />
        </BlockDiv>
        <ТөлбөрТөлөхQPay />
      </BlockHalf>
    </BlockDiv>
  );
}

const БараануудтайЛангуу = () => {
  const { products, loading, error } = useEgulenProductsForOrder();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  console.log("dsfsdfdsfsd", products);

  return (
    <BlockTab
      titleList={map(products, (s) => ({ title: s.name }))}
      customProps={{ titleBlockClassName: "mb-6" }}>
      {map(products, (sector) => (
        <BlockTab
          key={sector.name}
          titleList={map(sector.categories, (c) => ({ title: c.name }))}
          customProps={{ titleBlockClassName: "mb-4" }}>
          {map(sector.categories, (itemcategory, index) => (
            <BlockScroll
              key={itemcategory?.id || index}
              className="grid grid-cols-3 gap-8">
              {map(itemcategory.products, (itemproduct) => {
                const itemReady = {
                  ...itemproduct,
                  image: undefined,
                  mainimage: `${itemproduct.image_prefix}${itemproduct.image}`,
                };
                const { isInBasket, toggleItem } = useActionBasketButton({
                  item: itemReady,
                });
                return (
                  <MoleculeCard03
                    key={itemproduct?.id || index}
                    outerBlock={{
                      onClick: () => {
                        toggleItem();
                      },
                      className: `cursor-pointer ${
                        isInBasket ? "border-brand shadow-lg" : ""
                      }`,
                    }}
                    item={itemReady}
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

const ТөлбөрТөлөхQPay = () => {
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
