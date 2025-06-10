"use client";

import { Pagination } from "antd";
import MoleculeBasketButton from "atomv2/components/Molecules/MoleculeBasketButton";
import PanelMain from "atomv2/components/Panel/PanelMain";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import _ from "lodash";
import { useState } from "react";
import useSWR from "swr";
import Banner from "../Widget/DigitalServiceBanner";
import MoleculeBasketPanel from "atomv2/components/Molecules/MoleculeBasketPanel";
import { toMotoPrice } from "atomv2/util/widgetHelper";

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
    <main>
      <Banner
        item={{
          title: "Дэлгүр",
          subtitle: "Принтерийн хор, цэнэглэгч",
          mainimage:
            "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
        }}
      />

      <PanelMain>
        <section className="my-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {_.map(data.rows, (item: any, index: number) => (
              <ProductCard key={item?.id || index} item={item} />
            ))}
          </div>

          {/* Pagination Component */}
          <div className="mt-8 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={data.paging.totalcount}
              onChange={(page) => setCurrentPage(page)}
              showTotal={(total) => `Нийт: ${total}`}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </div>
        </section>
      </PanelMain>

      <MoleculeBasketPanel />
    </main>
  );
}

const ProductCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center group cursor-pointer border border-gray-50 relative">
      <img
        src={item.mainimage}
        alt={`product-${item.id}`}
        className="w-auto h-28 object-contain mb-7 group-hover:scale-105 transition-transform duration-300"
      />

      <RenderAtom
        value={item.title}
        type="text"
        className="text-xl font-semibold text-gray-800 group-hover:text-[#c8102e] transition-colors duration-300 mb-3"
      />

      <RenderAtom
        value={toMotoPrice(item.price)}
        type="text"
        className="font-light text-gray-500"
      />

      <RenderAtom
        value={item.description}
        type="text"
        className="text-gray-500 text-sm"
      />

      <MoleculeBasketButton item={item} />
    </div>
  );
};
