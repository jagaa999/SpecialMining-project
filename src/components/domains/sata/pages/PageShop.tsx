"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH4 from "atomv2/components/Text/TextH4";

import OrganismNewsInfiniteScrollAuto from "atomv2/components/Organisms/eshop/typesense/OrganismNewsInfiniteScrollAuto";
import OrganismTypesensePartHits from "atomv2/components/Organisms/eshop/typesense/OrganismTypesensePartHits";
import { OrganismTypesenseWrapper } from "atomv2/components/Organisms/eshop/typesense/OrganismTypesenseWrapper";

export default function SataPageShop() {
  return (
    <>
      {/* ✅ Hero */}
      <BlockSection
        className="relative py-32 text-center bg-cover bg-center transition-all duration-300 text-white"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751356805/autozar6/mainimages/2025/sata/delghuur_ccmifp.jpg)",
        }}>
        <BlockDiv type="div" className="absolute inset-0 bg-black/70 z-0" />
        <PanelMain className="relative z-10 space-y-6">
          <TextH1 value="Дэлгүүр" className="drop-shadow-md text-white" />
          <TextH4
            value="SATA бүтээгдэхүүний албан ёсны борлуулалт<br />Баталгаат чанар, мэргэжлийн хэрэглээ."
            className="text-white/90"
          />
        </PanelMain>
      </BlockSection>

      <OrganismTypesenseWrapper
        collectionName="moto_product"
        look_company={1733312860727931}>
        <OrganismNewsInfiniteScrollAuto
          collectionName="moto_product"
          facetConfig={{
            look_company: { isShow: false },
            isspecial: { isShow: false },
            ref_carfirm: { isShow: false },
            ref_carmark: { isShow: false },
            look_user: { isShow: false },
            ref_brand: { isShow: false },
          }}>
          <OrganismTypesensePartHits />
        </OrganismNewsInfiniteScrollAuto>
      </OrganismTypesenseWrapper>
    </>
  );
}
