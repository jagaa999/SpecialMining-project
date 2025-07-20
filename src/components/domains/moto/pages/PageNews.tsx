"use client";

import OrganismHeroPanel2 from "atomv2/components/Organisms/OrganismHeroPanel2";
import { InstantSearchWrapper } from "../Widget/InstantSearchWrapper";
import MotoNewsInfiniteScrollAuto from "../Widget/MotoNewsInfiniteScrollAuto";

export default function MotoPageNews() {
  return (
    <>
      <OrganismHeroPanel2
        keyword="mercedes-benz"
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Мэдээ, Нийтлэл",
          subtitle: "Авто Ертөнцөөр Аялцгаая",
        }}
      />
      <InstantSearchWrapper>
        <MotoNewsInfiniteScrollAuto />
      </InstantSearchWrapper>
    </>
  );
}
