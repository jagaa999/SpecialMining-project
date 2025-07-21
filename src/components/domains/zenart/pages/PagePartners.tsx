"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import OrganismBannerUnsplash from "atomv2/components/Organisms/banner/OrganismBannerUnsplash";
import TextH1 from "atomv2/components/Text/TextH1";
import { motion } from "framer-motion";
import { map } from "lodash";
import { useEffect, useState } from "react";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function PagePartners() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <OrganismBannerUnsplash
          keyWord="interior"
          item={{
            title: "Valued Partnerships",
            description: "Итгэлцэл, харилцан хүндлэл, чанартай бүтээлийн хүсэл дээр үндэслэсэн урт хугацааны хамтын ажиллагаа.",
          }}
        />
        {/* <SectionPartners /> */}
        <SectionPartnerLogos />
        <SectionFooter />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

const SectionPartnerLogos = () => {
  const [pulseIndexes, setPulseIndexes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndexes = partnerlogo
        .map((_, i) => (Math.random() < 0.3 ? i : -1))
        .filter((i) => i !== -1);
      setPulseIndexes(newIndexes);
    }, 2000); // Every 2 sec random logos pulse

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ZenartSectionWrapper BlockSectionObject={{ className: "bg-white" }}>
        <TextH1
          value="Тэргүүлэх компаниуд бидэнд итгэдэг"
          className="text-gray-700"
        />

        <BlockDiv className="flex flex-wrap gap-7 items-center justify-start w-full">
          {map(partnerlogo, (item, index) => {
            const isPulsing = pulseIndexes.includes(index);

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isPulsing ? 1.2 : 1,
                  boxShadow: isPulsing
                    ? "0 0 25px rgba(255, 179, 90, 0.7)"
                    : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 flex items-center justify-center">
                <RenderAtom
                  value={item}
                  type="image"
                  className="w-full h-full object-contain rounded-xl transition-all duration-300"
                  alt={`Partner ${index + 1}`}
                />
              </motion.div>
            );
          })}
        </BlockDiv>
      </ZenartSectionWrapper>
    </>
  );
};

const SectionFooter = () => {
  return (
    <ZenartSectionWrapper>
      <BlockFlexCol className="max-w-lg">
        {map(
          [
            {
              icon: "mdi:map-marker",
              text: "Улаанбаатар хот, Хан-уул дүүрэг 3-р хороо<br />Чингисийн өргөн чөлөө-44 Алтартана хотхон, 1-давхарт",
            },
            {
              icon: "mdi:web",
              text: "www.zenart.mn",
            },
            {
              icon: "mdi:instagram",
              text: "zenartistic",
            },
            {
              icon: "mdi:facebook",
              text: "Zen Art",
            },
            {
              icon: "mdi:phone",
              text: "7707-5088  |  8860-5088",
            },
          ],
          (item, index) => (
            <BlockFlexRow key={item.icon + index} className={``}>
              <RenderAtom
                value={item.icon}
                type="icon"
                className={`text-[#e3c3a2] text-2xl flex-none`}
              />
              <RenderAtom
                value={item.text}
                type="text"
                className="text-gray-300"
              />
            </BlockFlexRow>
          )
        )}
      </BlockFlexCol>
    </ZenartSectionWrapper>
  );
};

const partnerlogo = [
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/264545822_1524667854583726_3191891196663018406_n_iyfrnt.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/50099071_2045690192177799_7192680936318697472_n_cll80s.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/244394824_148230907517481_6448091910736338880_n_fpzuma.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/129638447_1399957367040045_9067169882251855799_n_kud98f.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/49608191_817923828545976_4060094823279886336_n_shg0oy.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/45683116_313777302787033_4942831316958707712_n_fzakbg.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/28423430_414159202369207_8433898635442870902_o_ike23p.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/skygarden_1_uvkadw.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/greatstonehill1_mfinrb.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/468283692_864976812383780_7597887702292046414_n_vemqnc.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/448606069_330429360104814_1811128440460950677_n_ohkrvj.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/441923653_122117153042296412_1567069594404795783_n_uut8b6.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/439959303_831760805655819_6872603605893634696_n_wcxqhc.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/428707038_956364466193125_1578593875411270503_n_rbkb9h.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/417431457_683707530613332_8028056910368859343_n_vzrwfc.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/404804432_122103906998130749_4703858419526461883_n_ezgc5v.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/377591000_122109701378031823_2027091067163695948_n_g1zrmd.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/371358581_690321926460695_5712133141508584877_n_noiegi.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/354245982_668211572015294_1919942337956419482_n_ggf2td.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/339261305_580288797381594_5805913969321358649_n_tj16l9.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/354204321_641437184675257_1762161453469178587_n_vjzi7u.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/352277731_786020192974265_7823639347692531789_n_msa5ml.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/349085511_1643878096025117_2506749158000474705_n_csckqq.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/327437664_497316512341773_8386575325559828457_n_pedmbz.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/326566454_918528629166414_8324171781287217176_n_lls4jn.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/327043706_5878420618871202_9046690168835276921_n_tic1qu.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/325487030_723311555810830_1507403070875726249_n_qnapon.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/327162218_844105743317531_2230310619584372785_n_nwma3p.jpg",
  "https://res.cloudinary.com/dcww202aa/image/upload/v1752460874/landing/02_zenart/partner_logos/310546895_479188254251253_4649186243264145970_n_mbr0t1.jpg",
];
