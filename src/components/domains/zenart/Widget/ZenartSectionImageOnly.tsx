import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import TextH3 from "atomv2/components/Text/TextH3";

export default function ZenartSectionImageOnly() {
  return (
    <BlockSection className="relative w-full h-screen">
      <RenderAtom
        value={
          "https://images.pexels.com/photos/269252/pexels-photo-269252.jpeg"
        }
        type="image"
        className="w-full h-full object-cover object-center rounded-none"
      />
      <TextH3
        value="Artistic Living..."
        className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent absolute top-[40%] -translate-y-[50%] left-24 text-7xl uppercase"
      />
      <BlockDiv className="w-[93%] h-[94%] m-auto border-2 border-[#f6c99e] absolute inset-0" />
    </BlockSection>
  );
}
