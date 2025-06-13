"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import _ from "lodash";
import AikidoHomeHero from "../Widget/AikidoHomeHero";

export default function AikidoPageAikido() {
  return (
    <>
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Aikido in Mongolia",
          subtitle: "Бүгд суралцах болох гайхамшигт бие хамгаалах урлаг",
          buttons: [
            {
              label: "Хичээллэх",
              href: "/class",
              style: "primary",
            },
            {
              label: "About Us",
              href: "/about",
              style: "light",
            },
          ],
        }}
      />

      <PanelMain className="flex flex-col items-start gap-14">
        <RenderAtom value={"Айкидо тухай"} type="text" as="h1" className="" />

        <BlockDiv type="section">
          <PanelMain className="flex flex-col items-start gap-14">
            <RenderAtom type="text" value="Айкидо гэж юу вэ?" as="h3" />
            <RenderAtom value="Айкидо бол 1920-иод онд Японд үүссэн тулааны урлаг бөгөөд үүнийг Морихэй Уешиба (1883–1969) гэдэг хүн үндэслэсэн юм. Тэрээр Японы уламжлалт тулааны урлагийн дээд түвшний мастер байсан. Айкидогийн гол онцлог нь довтлогчийн хөдөлгөөнтэй уялдан, түүний хүчийг шууд сөрөхийн оронд чиглэлийг нь өөрчилж, хяналтдаа авах зарчимд оршдог. Айкидод уралдаан тэмцээн гэж байдаггүй. Айкидо сургахын зорилго нь аливаа алхам, техник төгс болгохдоо бус — харин хүний зан чанарыг байгалийн жамд нийцүүлэн сайжруулахад оршдог." />

            <RenderAtom type="text" value="Философи" as="h3" />
            <RenderAtom value="Айкидог ихэвчлэн 'амьдралын энергитэй нэгдэх зам' эсвэл 'зөв зүйтэй сүнсний зам' хэмээн орчуулдаг. Үүсгэн байгуулагчийн философийн дагуу, Айкидо сургахын үндсэн зорилго нь хүчирхийлэл, түрэмгий занг хөгжүүлэх бус, харин өөрийгөө ялан дийлэхэд оршино." />

            <RenderAtom type="text" value="Сургалт" as="h3" />
            <RenderAtom value="Айкидо сургалт нь голчлон хоёр хүн урьдчилан тохиролцсон хэлбэрүүдийг хамтдаа давтах зарчмаар явагддаг. Үндсэн бүтэц нь техник хүлээн авагч этгээд техник хэрэглэгч рүү довтлох ба техник хэрэглэгч нь тэр дайралтыг Айкидогийн техникээр саармагжуулж зогсооно." />

            <RenderAtom type="text" value="Айкидо юу чаддаг вэ?" as="h3" />
            <RenderAtom value="Айкидо сургалт нь бие болон оюуны хөгжлийг зэрэг дэмжих зорилготой бөгөөд хүн бүр өөрийн ур чадварын түвшинд тохируулан, үйлдлийг дахин давтан сурч болдог тул хэн ч хичээллэх боломжтой. Айкидо зөвхөн эрүүл мэндэд тустай төдийгүй, өдөр тутмын амьдралд хэрэгцээтэй өөртөө итгэх итгэлийг аяндаа төлөвшүүлдэг. Дожо буюу бэлтгэлийн заал бол хүний нүдээр ертөнцийг гүнзгий танин мэдэх, нас, хүйс, ажил мэргэжил үл хамааран хүмүүстэй уулзах боломжтой хамгийн тохиромжтой орчин юм." />

            <RenderAtom type="text" value="Aikido Worldwide" as="h3" />
            <RenderAtom value="Айкидо гадаад орнуудад тархаж эхэлснээс хойш 60 жил өнгөрчээ. Энэ хугацаанд Айкидо 140 гаруй оронд бүрэн тогтнож, дэлхий дахинд танигдсан тулааны урлаг болсон байна. Айкидо нь бие сэтгэлээ зэрэг хөгжүүлэх арга хэмээн хүлээн зөвшөөрөгддөг учраас арьсны өнгө, хил хязгаарыг давсан үнэ цэнийг агуулдаг. Иймээс дэлхийн олон улс оронд үндсээ гүн бат суулгаж чадсан юм. Гадаад сурталчилгааны ажлуудын үр дүнд 1976 онд Олон улсын Айкидогийн холбоо (IAF) байгуулагдсан бөгөөд тус холбооны Ерөнхий чуулган дөрвөн жил тутам зохион байгуулагддаг. 1984 онд IAF нь Олон улсын спортын холбоодын ерөнхий холбоо (GAISF)-ын албан ёсны гишүүн болсон. Мөн Японы Засгийн газрын сангаас илгээсэн Айкидо багш нар, Ахмад мэргэжилтний хөтөлбөр болон Японы Олон улсын хамтын ажиллагааны агентлаг (JICA)-ийн Залуусын хөтөлбөрөөр дамжуулан гадаад орнуудад идэвхтэй сайн дурын сургалт, сурталчилгаа явагдаж байна. Өнөөдөр Айкидог 21-р зууны шинэ хүний соёл хэмээн дэлхий нийтээр үнэлж, хүлээн зөвшөөрч байгаа билээ." />
          </PanelMain>
        </BlockDiv>

        <BlockDiv type="section">
          <RenderAtom type="text" value="Айкидогийн түүх" as="h1" />
          <BlockDiv className="pt-24 pl-12">
            <ul className="border-l border-gray-300 pl-5">
              {_.map(historyEvents, (event, index) => (
                <li key={index} className="mb-10 ml-4 relative">
                  <BlockDiv
                    type="span"
                    className="absolute w-3 h-3 bg-brand rounded-full -left-[42px] top-2 border-2 border-white"
                  />
                  <RenderAtom
                    value={event.year}
                    type="text"
                    className="text-lg font-semibold text-brand"
                  />

                  <RenderAtom
                    value={event.description}
                    className="max-w-lg py-0 md:py-0"
                  />
                </li>
              ))}
            </ul>
          </BlockDiv>
        </BlockDiv>
      </PanelMain>
    </>
  );
}

const historyEvents = [
  {
    year: "1883",
    description:
      "Aikido-ийн үндэслэгч Morihei Ueshiba 12-р сарын 14-нд Японы Wakayama мужийн Tanabe хотод төрсөн.",
  },
  {
    year: "1897",
    description: "Ueshiba уламжлалт тулааны урлагуудыг судалж эхэлсэн.",
  },
  {
    year: "1912",
    description:
      "Засгийн газрын уриалгаар Hokkaido-д нүүн суурьшихаар шийдэж, Shirataki (одоогийн Engaru-cho)-д нүүн очсон.",
  },
  {
    year: "1919",
    description:
      "Ayabe, Kyoto-д Omoto шашны удирдагч Onisaburo Deguchi-тэй танилцаж, сэтгэл санааны бясалгалд шамдсан.",
  },
  {
    year: "1920",
    description: "Ayabe-д 'Ueshiba-juku' нэртэй сургалтын дожо нээсэн.",
  },
  {
    year: "1921",
    description:
      "Kisshomaru Ueshiba (хоёр дахь Doshu) 6-р сарын 27-нд Kyoto мужийн Ayabe хотод төрсөн.",
  },
  {
    year: "1922",
    description:
      "Ueshiba 'Aiki'-г тулааны урлагийн мөн чанар хэмээн тодорхойлсон.",
  },
  {
    year: "1927",
    description:
      "Ueshiba гэр бүлтэйгээ Tokyo руу нүүж, Shirogane-Sarumachi, Shiba-д тулааны урлаг зааж эхэлсэн.",
  },
  {
    year: "1931",
    description:
      "Kobukan дожо-г одоогийн Shinjuku дүүргийн Wakamatsu-cho-д байгуулсан.",
  },
  {
    year: "1940",
    description:
      "Kobukai Foundation-ийг Эрүүл мэнд, нийгмийн халамжийн яам албан ёсоор хүлээн зөвшөөрсөн.",
  },
  {
    year: "1941",
    description:
      "Iwama, Ibaraki мужид гадаа дожо барих төлөвлөгөө боловсруулсан.",
  },
  {
    year: "1942",
    description:
      "'Aikido' нэрийг албан ёсоор ашиглаж эхэлсэн. Kisshomaru Ueshiba төв оффисын захирал болсон.",
  },
  {
    year: "1943",
    description: "Iwama, Ibaraki мужид Aiki Shrine байгуулагдсан.",
  },
  {
    year: "1945",
    description:
      "Iwama-д Ibaraki дожо баригдсан (2004 онд Ibaraki Branch Dojo гэж нэрлэгдсэн).",
  },
  {
    year: "1948",
    description:
      "Aikikai Foundation-ийг Эрүүл мэнд, нийгмийн халамжийн яам албан ёсоор хүлээн зөвшөөрсөн (2-р сарын 9). Kenji Tomita Aikikai Foundation-ийн дарга болсон.",
  },
  {
    year: "1949",
    description:
      "Kisshomaru Ueshiba-ийн удирдлага дор Hombu дожо-д өдөр тутмын сургалт эхэлсэн.",
  },
  {
    year: "1951",
    description:
      "Moriteru Ueshiba (одоогийн Doshu) 4-р сарын 2-нд Tokyo-д төрсөн.",
  },
  {
    year: "1955",
    description:
      "Nihonbashi, Tokyo дахь Takashiyama их дэлгүүрийн дээвэр дээр анхны олон нийтийн Aikido үзүүлбэр болсон.",
  },
  {
    year: "1957",
    description: "Kisshomaru Ueshiba анхны 'Aikido' номоо хэвлүүлсэн.",
  },
  {
    year: "1959",
    description:
      "Aikido сонин (өмнө нь 'Aiki' гэж нэрлэгддэг байсан) анхны дугаараа хэвлүүлсэн.",
  },
  {
    year: "1960",
    description: "Ueshiba Японы Засгийн газраас Purple Ribbon медаль хүртсэн.",
  },
  {
    year: "1961",
    description:
      "Бүх Японы Aikido Их Сургуулийн Холбоо байгуулагдсан (10-р сар).",
  },
  {
    year: "1964",
    description:
      "Ueshiba Японы Засгийн газраас Order of the Rising Sun, Gold Rays with Rosette шагнал хүртсэн.",
  },
  {
    year: "1967",
    description: "Kisshomaru Ueshiba Aikikai Foundation-ийн дарга болсон.",
  },
  {
    year: "1968",
    description:
      "Шинээр баригдсан Aikido Hombu дожо ашиглалтад орсон (1-р сар). Aikido Академи Tokyo хотын захиргаанаас батлагдсан (7-р сар).",
  },
  {
    year: "1969",
    description:
      "Ueshiba 4-р сарын 26-нд 86 насандаа таалал төгссөн. Kisshomaru Ueshiba Doshu цолыг өвлөсөн.",
  },
  {
    year: "1976",
    description:
      "Бүх Японы Aikido Холбоо байгуулагдсан (5-р сар). Эхний IAF конгресс Tokyo дахь Keio Plaza зочид буудалд зохион байгуулагдсан. 28 орны 400 төлөөлөгч оролцсон (10-р сар).",
  },
  {
    year: "1977",
    description:
      "15 дахь удаагийн Бүх Японы Aikido үзүүлбэр Nippon Budokan-д зохион байгуулагдсан. Үүнээс хойш жил бүр зохион байгуулагддаг болсон.",
  },
  {
    year: "1986",
    description:
      "Moriteru Ueshiba Hombu дожо-ийн тэргүүн болсон. IAF Олон Улсын Спортын Холбоодын Ерөнхий Холбооны (GAISF) албан ёсны гишүүн болсон (10-р сар). Kisshomaru Doshu Японы Засгийн газраас Blue Ribbon медаль хүртсэн (11-р сар).",
  },
  {
    year: "1995",
    description:
      "Aikido-г дотоод болон олон улсад түгээхэд оруулсан хувь нэмрийг нь үнэлж, Kisshomaru Doshu Японы Засгийн газраас Third Order of the Sacred Treasure шагнал хүртсэн (4-р сар).",
  },
  {
    year: "1996",
    description:
      "Kisshomaru Doshu Aikikai Foundation-ийн ерөнхийлөгч болсон. Moriteru Ueshiba дарга болсон (7-р сарын 21).",
  },
  {
    year: "1999",
    description:
      "Хоёр дахь Doshu Kisshomaru Ueshiba 1-р сарын 4-нд 77 насандаа таалал төгссөн. Moriteru Ueshiba Doshu цолыг өвлөсөн (1-р сарын 18).",
  },
  {
    year: "2002",
    description:
      "Бүх Японы Ахлах Сургуулийн Aikido Холбоо байгуулагдсан (5-р сарын 25). Бүх Японы Ахлах Сургуулийн Aikido үзүүлбэр Tokyo Budokan-д зохион байгуулагдсан (8-р сар).",
  },
  {
    year: "2012",
    description:
      "Aikikai Foundation олон нийтийн ашиг сонирхлын байгууллага болгон бүртгэгдсэн (4-р сар).",
  },
  {
    year: "2013",
    description:
      "Moriteru Ueshiba Doshu Японы Эзэн хаанаас Blue Ribbon медаль хүртсэн (11-р сар).",
  },
];
