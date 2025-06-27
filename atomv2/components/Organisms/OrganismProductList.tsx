"use client";

import { Pagination } from "antd";
import BlockDataStateProvider from "atomv2/components/Blocks/BlockDataStateProvider";
import { map } from "lodash";
import { useState } from "react";
import { useDataContext } from "src/config/context/DataContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeBasketButton from "../Molecules/MoleculeBasketButton";
import PosDesc from "../Position/PosDesc";
import PosPrice from "../Position/PosPrice";
import TextH6 from "../Text/TextH6";

interface OrganismProductListProps {
  companyId: string;
  pageSize?: number;
}

export default function OrganismProductList({
  companyId,
  pageSize = 15,
}: OrganismProductListProps) {
  const [offset, setOffset] = useState(1);

  return (
    <BlockDataStateProvider
      endpoint="/api/moto-product"
      query={{
        apicommand: "list",
        look_company: companyId,
      }}
      offset={offset}
      setOffset={setOffset}
      pageSize={pageSize}>
      <ProductList />
    </BlockDataStateProvider>
  );
}

const ProductList = () => {
  const { data, paging } = useDataContext();

  return (
    <>
      <BlockDiv className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {map(data.rows, (item: any, index: number) => (
          <ProductCard key={item?.id || index} item={item} />
        ))}
      </BlockDiv>

      {/* Pagination Component */}
      <BlockDiv className="flex justify-center">
        <Pagination
          size="default"
          current={paging.offset}
          pageSize={paging.pageSize}
          total={paging.total}
          onChange={(page) => paging.setOffset(page)}
          showTotal={(total) => `Нийт: ${total}`}
          showSizeChanger={false}
          showQuickJumper={false}
        />
      </BlockDiv>
    </>
  );
};

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
