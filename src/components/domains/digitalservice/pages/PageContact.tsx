"use client";

import { Icon } from "@iconify/react";
import DigitalServiceHomeHero from "../Widget/DigitalServiceHomeHero";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";

export default function DigitalServicePageContact() {
  //   {
  //   item = item_local,
  // }: {
  //   item: any;
  // }
  return (
    <>
      <DigitalServiceHomeHero item={item_local?.hero} />

      {/* <PanelMain> */}
      <div className="w-full bg-white text-gray-900">
        {/* Hero */}
        <section className="min-h-[60vh] bg-gradient-to-r from-red-600 to-red-400 text-white flex items-center justify-center px-10">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-bold">Бидэнтэй холбогдох</h1>
            <p className="text-xl">
              Таны дуртай суваг — доор таныг хүлээж байна!
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="min-h-screen bg-red-50 flex flex-col items-center px-10 py-20 space-y-12">
          <h2 className="text-4xl font-bold text-red-700 text-center">
            Холбогдох суваг
          </h2>
          <p className="text-xl font-light text-gray-500 text-center">
            Та өөрт тохиромжтой сувгаа сонгоно уу
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full text-lg">
            {[
              {
                icon: "ic:baseline-phone",
                label: "Утас",
                content: "+976 - 70122038<br /> +976 - 96012038",
                href: "tel:96012038",
              },
              {
                icon: "mdi:facebook",
                label: "Facebook хуудас",
                content: "/DigitalService",
                href: "https://facebook.com/DigitalService",
              },
              {
                icon: "ic:baseline-facebook-messenger",
                label: "FB Messenger",
                content: "Шууд чатлах",
                href: "https://m.me/DigitalService",
              },
              {
                icon: "ic:baseline-email",
                label: "Имэйл",
                content: "info@digitalservice.mn",
                href: "mailto:info@digitalservice.mn",
              },
              {
                icon: "mdi:map-marker",
                label: "Байршил",
                content:
                  "Улаанбаатар, ЧД, 9-р хороо, Их тойруу 54, Компьютер Молл төв, 5007 тоот",
                href: "https://goo.gl/maps/abc123", // өөрийнхөө map холбоосоор солиорой
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:ring-2 hover:ring-red-300 transition-all flex flex-col items-center space-y-3 text-center">
                <Icon
                  icon={item.icon}
                  className="text-red-600"
                  width={40}
                  height={40}
                />
                <p className="text-xl font-semibold text-red-700">
                  {item.label}
                </p>
                <RenderAtom
                  value={item.content}
                  type="text"
                  className=""
                  isHtml={true}
                />

                {/* <p>{item.content}</p> */}
              </a>
            ))}
          </div>
        </section>
      </div>
      {/* </PanelMain> */}
    </>
  );
}

const item_local = {
  title: "Overview",
  description:
    "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
  video: {
    poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
    src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
  },
  hero: {
    backgroundImage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
    title: "Дижитал Сервис",
    subtitle:
      "Принтер, принтерийн хортой холбоотой худалдаа, засвар үйлчилгээ бүгд нэг дор",
    buttons: [
      {
        label: "Манай хорнууд",
        href: "/shop",
        style: "primary",
      },
      {
        label: "About Us",
        href: "/about",
        style: "light",
      },
    ],
  },
};
