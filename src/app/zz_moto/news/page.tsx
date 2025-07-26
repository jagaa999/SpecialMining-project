import { InstantSearchWrapper } from "@/components/domains/moto/Widget/InstantSearchWrapper";
import MotoNewsInfiniteScrollAuto from "@/components/domains/moto/Widget/MotoNewsInfiniteScrollAuto";
import OrganismHeroPanel2 from "atomv2/components/Organisms/OrganismHeroPanel2";

export const revalidate = 60; // 60 сек тутамд regenerate хийнэ

export default function MotoPageNews() {
  // return <>dsf dsfdsf s This is News</>;
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
