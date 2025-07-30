import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismNavbarMenu from "atomv2/components/Organisms/OrganismNavbarMenu";
import MotoFooter from "../Widget/MotoLayout/MotoFooter";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";
import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("MotoLayoutWrapper орж байна ааааааааааа");
  return (
    <BlockDiv
      type="main"
      className="min-h-screen flex flex-col justify-between"
      data-block="MotoLayoutWrapper">
      <OrganismNavbarMenu item={staticItem} variant="dark" />

      <BlockDiv className="flex-1">{children}</BlockDiv>

      <MotoFooter />
      <OrganismScrollToTopButton className="bg-black w-10 h-10" />
    </BlockDiv>
  );
}

const staticItem: any = {
  logo: "https://cdn.moto.mn/moto/landing/15_moto/7b8f9eaf-8fea-4fdc-be78-93a2881b2757.png?t=1752997033943",
  menu: [
    { title: "НҮҮР", href: "/" },
    { title: "НИЙТЛЭЛ", href: "/news" },
    // { title: "АВТОМАШИН", href: "/car" },
    // { title: "СЭЛБЭГ", href: "/parts" },
  ],
  inquiryButton: {
    title: "Холбогдох",
    href: "/contact",
  },
};
