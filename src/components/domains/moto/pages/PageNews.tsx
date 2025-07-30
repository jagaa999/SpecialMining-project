import OrganismHeroPanel2 from "atomv2/components/Organisms/OrganismHeroPanel2";
import { OrganismTypesenseWrapper } from "atomv2/components/Organisms/eshop/typesense/OrganismTypesenseWrapper";
import OrganismNewsInfiniteScrollAuto from "atomv2/components/Organisms/eshop/typesense/OrganismNewsInfiniteScrollAuto";
import OrganismTypesenseNewsHits from "atomv2/components/Organisms/eshop/typesense/OrganismTypesenseNewsHits";

export const revalidate = 60;

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
      <OrganismTypesenseWrapper collectionName="moto_news_v2">
        <OrganismNewsInfiniteScrollAuto collectionName="moto_news_v2">
          <OrganismTypesenseNewsHits />
        </OrganismNewsInfiniteScrollAuto>
      </OrganismTypesenseWrapper>
    </>
  );
}
