"use client";

import BlockSection from "atomv2/components/Blocks/BlockSection";
import OrganismBasketPanel from "atomv2/components/Organisms/eshop/OrganismBasketPanel";
import OrganismNewsInfiniteScrollAuto from "atomv2/components/Organisms/eshop/typesense/OrganismNewsInfiniteScrollAuto";
import OrganismTypesensePartHits from "atomv2/components/Organisms/eshop/typesense/OrganismTypesensePartHits";
import { OrganismTypesenseWrapper } from "atomv2/components/Organisms/eshop/typesense/OrganismTypesenseWrapper";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH2 from "atomv2/components/Text/TextH2";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function TcmotorsPageParts() {
  return (
    <>
      <BlockSection>
        <PanelMain className="space-y-12 pb-0">
          <TextH2 value="Сэлбэгүүдийн жагсаалт" />
          <TextHtml value="Бүх сэлбэгүүд маань мэргэжлийн оношилгоонд орсон бөгөөд бүрэн бүтэн байдал болон таарлын мэдээллийг дагалдуулан өгдөг." />
        </PanelMain>
      </BlockSection>
      <OrganismTypesenseWrapper
        collectionName="moto_product"
        look_company={1733312860727930}>
        <OrganismNewsInfiniteScrollAuto
          collectionName="moto_product"
          facetConfig={{
            look_company: { isShow: false },
            isspecial: { isShow: false },
            ref_carfirm: { isShow: true },
            ref_carmark: { isShow: true },
            look_user: { isShow: false },
            ref_brand: { isShow: true },
          }}>
          <OrganismTypesensePartHits />
        </OrganismNewsInfiniteScrollAuto>
      </OrganismTypesenseWrapper>

      <OrganismBasketPanel />
    </>
  );
}
