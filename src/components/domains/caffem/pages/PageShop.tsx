"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockTab from "atomv2/components/Blocks/BlockTab";
import { map } from "lodash";
import { useProductsForOrder } from "src/config/hooks/egulen/useProductsForOrder";

export default function ShopPage() {
  const { products, loading, error } = useProductsForOrder();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  // `products` нь Sector[] гэж үзье
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <BlockTab
        titleList={map(products, (s) => ({ title: s.name }))}
        customProps={{ titleBlockClassName: "mb-6" }}>
        {map(products, (sector) => (
          <BlockTab
            key={sector.name}
            titleList={map(sector.categories, (c) => ({ title: c.name }))}
            customProps={{ titleBlockClassName: "mb-4" }}>
            {map(sector.categories, (category) => (
              <BlockDiv key={category.name}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {map(category.products, (p) => (
                    <div
                      key={p.id}
                      className="border p-4 rounded-lg shadow hover:shadow-md transition">
                      <img
                        src={`${p.image_prefix}${p.image}`}
                        alt={p.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <p className="mt-1 text-blue-600 font-bold">
                        ₮{Number(p.price).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </BlockDiv>
            ))}
          </BlockTab>
        ))}
      </BlockTab>
    </div>
  );
}
