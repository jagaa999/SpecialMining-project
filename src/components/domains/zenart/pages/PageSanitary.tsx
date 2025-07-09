"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageSanitaryFurniture() {
  return (
    <>
      <SectionSanitary />
      <SectionFurniture />
    </>
  );
}

const SectionSanitary = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row bg-[#fefaf6] text-[#1a1a1a] pt-0 pb-28 px-0 lg:px-0 gap-0">
      <BlockDiv className="w-full lg:w-1/2 bg-white px-6 lg:px-16 py-12 space-y-6 flex flex-col justify-center">
        <TextH3 value="07" className="text-[#f4be8a] text-5xl font-black" />
        <TextH3
          value="Сангийн тоноглол буюу Sanitary ware"
          className="text-[#1a1a1a] text-3xl font-extrabold"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>H</span>Honestly – Hi-tech – Hygiene</b><br />Эрүүл ахуйн шийдэл гаргахад зориулагдсан"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>C</span>Creativity – Compact – Comfort</b><br />Амьдралыг илүү хөнгөвчлөх утга учиртай болгох бүтээгдхүүнээр хангадаг"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>G</span>Gratification – Globalization – Green</b><br />Байгаль орчны ногоон байгуулалтыг дэмжих бүтээгдхүүн үйлдвэрлэгчид"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="Ариун цэврийн өрөөний шилдэг бүтээгдэхүүн үйлдвэрлэгч Тайван улсын 100 жилийн түүхт Hocheng групп буюу HCG брэнд нь ухаалаг дизайны тусламжтай тав тухтай байдлыг мэдрүүлдэг, орчин үеийн технологийн шийдэл болон ухаалаг төхөөрөмжийн төгс хослол нь загварлаг бөгөөд энгийн хэв маягтай байдлыг бүрдүүлж өгдөг. Өдөр тутмын амьдралын хэрэглээ мэт боловч түүний гоёмсог загвар, хээнцэр, бат бөх байдал нь өдөр бүр цэвэр цэмцгэр, тав тухыг мэдрүүлдгээрээ уг брэндийн онцлог юм."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="Ази, номхон далайн орнуудын дунд хэдийнэ танигдаж чадсан керамик эдлэл (тосгуур, суултуур, ванн), шингэн холигч (шүршүүр, холигч) зэргийг үйлдвэрлэгч HCG брэндийн албан ёсны баталгаатай борлуулалтаар ариун цэврийн өрөөний тоноглол нийлүүлж, шаардлагатай дизайн, орчны тохиргооны санал болгох байна. Монголд баригдаж буй шинэ барилгын төсөлүүдийн ариун цэврийн өрөөний цогц шийдлийг бий болгож зорилтот хэрэглэгчдэд ахин дахин амжилттай хүргэсээр..."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg"
          alt="Sanitary Ware"
          className="w-full h-full object-cover object-center"
        />
      </BlockDiv>
    </BlockDiv>
  );
};

const SectionFurniture = () => {
  return (
    <BlockDiv type="section" className="w-full bg-[#fefaf6] text-[#1a1a1a] py-20 px-6">
      <BlockDiv className="max-w-screen-xl mx-auto space-y-8">
        <TextH3 value="08" className="text-[#f4be8a] text-5xl font-black" />
        <TextH3 value="Тавилга" className="text-3xl font-extrabold" />
        <TextHtml
          value="Орчин цагт албан байгууллагууд брэндийн өнгө төрх, байр суурь, цаашлаад өрсөлдөхүйц чанараа интерьер дизайнаар илэрхийлдэг болсон. Иймд ажлын бүтээмж, сэтгэл ханамжийг өгөх, байгууллагад урт хугацааны эдийн засгийн хэмнэлттэй бий болгохын зэрэгцээ ухаалаг, олон төрлийн шийдэл бүхий иж бүрэн үйлчилгээ үзүүлэх нь гол зорилго. “Artistic Living” уран зор урлалыг тавилгын чиг хандлагад тодорхойлж буй, эргэх харилцаанд суурилсан сэтгэлд нийцсэн чанартай, онцгой үйлчилгээг хүргэхээр ажиллаж байна."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="2017 оноос хойш үйл ажиллагаагаа өргөжүүлэн, тэлсээр өнөөгийн өндөр хүчин чадал бүхий өөрийн үйлдвэртэй, дотоодын хэрэглэгчдийн онцлогт тохирсон тавилгыг үйлдвэрлэжийн сайн тавилга байршуулагч болон орон сууцны ашигтай төлөвлөлтийн мэргэжлийн зөвлөгөө өгөх, план зураг гаргах, борлуулалтын дараах тавилгын баталгаат засвар үйлчилгээ, сэлбэг хэрэгслээр тогтмол хангах үйлчилгээг үзүүлдэг болоод байна. Манай дэлхийн зах зээл дээрээс шинэлэг шийдэл бүхий албан тасалгаа болон гэр ахуйн тавилга нийлүүлж, үйлдвэрлэж байна. Таны хэрэгцээнд төгс нийцэх дэлхийн шилдэг брэндүүдийг хамгийн чухал орон зайд..."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
      </BlockDiv>
    </BlockDiv>
  );
};
