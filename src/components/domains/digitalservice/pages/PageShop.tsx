"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismBasketPanel from "atomv2/components/Organisms/eshop/OrganismBasketPanel";
import OrganismNewsInfiniteScrollAuto from "atomv2/components/Organisms/eshop/typesense/OrganismNewsInfiniteScrollAuto";
import OrganismTypesensePartHits from "atomv2/components/Organisms/eshop/typesense/OrganismTypesensePartHits";
import { OrganismTypesenseWrapper } from "atomv2/components/Organisms/eshop/typesense/OrganismTypesenseWrapper";
import Banner from "../Widget/DigitalServiceBanner";

export default function DigitalServicePageShop() {
  return (
    <BlockDiv type="main">
      <Banner
        item={{
          title: "Дэлгүүр",
          subtitle: "Принтерийн хор, цэнэглэгч",
          mainimage:
            "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
        }}
      />
      <OrganismTypesenseWrapper
        collectionName="moto_product"
        look_company={1733312860727929}>
        <OrganismNewsInfiniteScrollAuto
          collectionName="moto_product"
          facetConfig={{
            ref_brand: { isShow: true },
            look_company: { isShow: false },
            isspecial: { isShow: false },
            ref_carfirm: { isShow: false },
            ref_carmark: { isShow: false },
            look_user: { isShow: false },
          }}>
          <OrganismTypesensePartHits />
        </OrganismNewsInfiniteScrollAuto>
      </OrganismTypesenseWrapper>

      <OrganismBasketPanel />
    </BlockDiv>
  );
}
