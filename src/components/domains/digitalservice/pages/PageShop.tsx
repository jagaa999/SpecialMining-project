"use client";

import { Pagination } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import MoleculeBasketButton from "atomv2/components/Molecules/MoleculeBasketButton";
import MoleculeBasketPanel from "atomv2/components/Molecules/MoleculeBasketPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PosDesc from "atomv2/components/Position/PosDesc";
import PosPrice from "atomv2/components/Position/PosPrice";
import TextH6 from "atomv2/components/Text/TextH6";
import { map } from "lodash";
import { useState } from "react";
import useSWR from "swr";
import Banner from "../Widget/DigitalServiceBanner";

export default function DigitalServicePageShop() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const { data, error, isLoading } = useSWR(
    `/api/moto-product?apicommand=list&look_company=1733312860727929&offset=${currentPage}&pagesize=${pageSize}`
  );

  // console.log("dsfdsfdsfsdf", { data, error, isLoading });

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data?.rows || data.rows.length === 0)
    return <div>No products found</div>;

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
          {/* Products */}
          <BlockDiv className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {map(data.rows, (item: any, index: number) => (
              <ProductCard key={item?.id || index} item={item} />
            ))}
          </BlockDiv>

          {/* Pagination Component */}
          <BlockDiv className="flex justify-center">
            <Pagination
              size="default"
              current={currentPage}
              pageSize={pageSize}
              total={data.paging.totalcount}
              onChange={(page) => setCurrentPage(page)}
              showTotal={(total) => `Нийт: ${total}`}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </BlockDiv>
        </PanelMain>
      </BlockDiv>

      <MoleculeBasketPanel />
    </BlockDiv>
  );
}

const ProductCard = ({ item }: { item: any }) => {
  return (
    <BlockDiv className="bg-white rounded-brand shadow-sm hover:shadow-brand transition-shadow duration-300 px-brand-x py-brand-y flex flex-col items-center gap-8 text-center group cursor-pointer relative">
      <RenderAtom
        value={item?.mainimage}
        type="image"
        className="w-auto h-28 object-contain group-hover:scale-105 transition-transform duration-300"
        alt={`product-${item.id}`}
      />

      <TextH6
        item={item}
        className="text-slate-900 group-hover:text-brand transition-colors duration-300"
      />

      <PosPrice item={item} />

      <PosDesc item={item} className="text-sm" />

      <MoleculeBasketButton item={item} />
    </BlockDiv>
  );
};
