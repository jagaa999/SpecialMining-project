"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PanelTextMain from "atomv2/components/Panel/PanelTextMain";
import PanelTitle from "atomv2/components/Panel/PanelTitleMain";

export default function TcmotorsPageProducts() {
  return (
    <>
      <OrganismHeroPanel
        keyword="japan car"
        item={{
          backgroundImage:
            "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
          title: "Хамгийн эрэлттэй бүтээгдэхүүнүүд",
          subtitle: "Чанартай хуучин сэлбэгүүд — шалгагдсан, бэлэн нөөцтэй",
          buttons: [
            {
              label: "Холбогдох",
              href: "/contact",
              style: "primary",
            },
          ],
        }}
      />

      <PanelMain className="flex flex-col gap-12">
        <PanelTitle value="Бидний санал болгож буй зарим бүтээгдэхүүн" />

        <BlockDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 shadow hover:shadow-lg rounded-xl overflow-hidden transition duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <RenderAtom
                  value={item.name}
                  type="text"
                  className="text-lg font-semibold"
                />
                <RenderAtom
                  value={item.price}
                  type="text"
                  className="text-primary text-base font-medium"
                />
                <RenderAtom
                  value={item.condition}
                  type="text"
                  className="text-gray-500 text-sm"
                />
              </div>
            </div>
          ))}
        </BlockDiv>

        <BlockDiv className="text-center mt-12">
          <PanelTextMain value="Бүх төрлийн сэлбэгүүдийн дэлгэрэнгүй жагсаалтыг манай дэлгүүр дээрээс эсвэл чат, утсаар лавлана уу. Захиалга өгөх, зөвлөгөө авах бол манай мэргэжилтнүүд танд туслахад бэлэн." />
        </BlockDiv>
      </PanelMain>
    </>
  );
}

const sampleProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588571936003-473b2b3cbb2d",
    name: "Хөдөлгүүрийн блок",
    price: "₮850,000",
    condition: "Шалгагдсан, баталгаатай",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601933471661-6ec7d4f9d0a2",
    name: "Хурдны хайрцаг",
    price: "₮650,000",
    condition: "Японоос оруулж ирсэн",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580128637391-f3c8d51f17db",
    name: "Амортизатор",
    price: "₮120,000",
    condition: "Шинэчлэгдсэн, сайн чанар",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1579583765288-421a6d178fc5",
    name: "Урд гэрлийн ком",
    price: "₮95,000",
    condition: "Гэрэлтэлт сайн, хагаралгүй",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1603376947795-4024f35df9c4",
    name: "Радиатор",
    price: "₮180,000",
    condition: "Хөргөлтийн чадвар сайтай",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558002038-c57cc6bc57b9",
    name: "Тормозны диск",
    price: "₮75,000",
    condition: "Эвдрэлгүй, жигд гадаргуутай",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1563720228452-c6a5b3c6f49f",
    name: "Генератор",
    price: "₮230,000",
    condition: "Сайн ажиллагаатай, баталгаат",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1583770479792-9018f327fa56",
    name: "Агаар шүүгч",
    price: "₮25,000",
    condition: "Шинэ, OEM чанар",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1617999792823-7eb9c1e3b097",
    name: "Цахилгааны блок",
    price: "₮280,000",
    condition: "Япон оригинал, хөнгөн хэрэглээтэй",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1603380351889-9f1b473b9f01",
    name: "Ар талын гэрэл",
    price: "₮85,000",
    condition: "Цэвэрхэн, цууралтгүй",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1628271480906-73e9ee7c91f7",
    name: "Шатахууны насос",
    price: "₮140,000",
    condition: "Солонгосоос орж ирсэн",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1604502461940-142fa34f94b0",
    name: "Клапангийн таг",
    price: "₮45,000",
    condition: "Сэвгүй, цэвэрхэн",
  },
];
