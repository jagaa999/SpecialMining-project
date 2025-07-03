"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismBasketPanel from "atomv2/components/Organisms/eshop/OrganismBasketPanel";
import OrganismProductList from "atomv2/components/Organisms/OrganismProductList";
import PanelMain from "atomv2/components/Panel/PanelMain";
import Banner from "../Widget/DigitalServiceBanner";

export default function DigitalServicePageShop() {
  return (
    <BlockDiv type="main" className="w-full bg-bg ">
      <Banner
        item={{
          title: "Дэлгүүр",
          subtitle: "Принтерийн хор, цэнэглэгч",
          mainimage:
            "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
        }}
      />

      <BlockDiv type="section">
        <PanelMain className="flex flex-col gap-12">
          <OrganismProductList companyId="1733312860727929" pageSize={9} />
        </PanelMain>
      </BlockDiv>

      <OrganismBasketPanel />
    </BlockDiv>
  );
}
