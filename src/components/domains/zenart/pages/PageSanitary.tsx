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
            className="w-full flex flex-col lg:flex-row bg-[#fefaf6] text-[#1a1a1a] pt-0 pb-28 px-0 lg:px-0 gap-0"
        >
            <BlockDiv className="w-full lg:w-1/2 bg-white px-6 lg:px-16 py-12 space-y-6 flex flex-col justify-center">
                <TextH3
                    value="07"
                    className="text-[#f4be8a] text-5xl font-black"
                />
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
                    value="Ариун цэврийн ерөнхий шийдэл бүтээгдхүүнийг үйлдвэрлэгч Тайван улсын 100 жилийн түүхт Hocheng групп буюу HCG брэнд нь ухаалаг дизайны тусламжтай тав тухтай байдлыг мэдрүүлдэг, орчин үеийн технологийн шийдэл болон ухаалаг төхөөрөмжийн төгс зохицол нь загвараар төдийгүй хяналттай байдал үүсгэдэг. Өдөр тутмын амьдралын хэрэглээ мэт боловч төгсгөлгүй загвар, хөнгөлөлт, бат бөх байдал нь хэрэглэгчдэд үнэ цэнийг өгч, та тухайн бүтээгдэхүүнийг үргэлжлүүлэн онцлог гэж хүлээн авна.<br /><br />Ази номхон далайн орнуудын дунд хэзийнээс танигдсан керамик эдлэл (тосгуур, суултуур, ванн), шугам холигч (шүршүүр, хошуурга) зэрэг үйлдвэрлэгч HCG брэндийн алб ерөнхий болон албан байгууллагуудын ариун цэврийн ерөнхий тоноглолыг нийлүүлж, шаардлагатай дизайны, оновчтой, хурдан санал болгодог байна. Монголд брэндийн цоо шинэ барилгын төсөлд нийлүүлсэн ширээний ерөнхий цогц шийдлийг бий болгож зорилготой эцсийнхээ алхам маш амжилттай үргэлжилсээр..."
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
        <BlockDiv
            type="section"
            className="relative w-full bg-[#fefaf6] text-[#1a1a1a]"
        >
            {/* TEXT CARD with hover effect */}
            <BlockDiv className="group relative z-10 max-w-[1160px] mx-auto px-6 pt-[88px] pb-[60px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.015] hover:bg-[#fdf4e7] bg-[#fefaf6] rounded-2xl shadow-md">
                <div className="mb-[6px] transition-all group-hover:text-[#f4be8a]">
                    <TextH3
                        value="08"
                        className="text-[#f4be8a] text-[58px] font-light leading-none"
                    />
                </div>
                <div className="mb-[32px]">
                    <TextH3
                        value="Тавилга"
                        className="text-[#1a1a1a] text-[30px] font-extrabold leading-[1.2]"
                    />
                </div>
                <TextHtml
                    value={`Орчин цагт албан байгууллагууд брэндийн өнгө төрх, байр суурь, цаашлаад өрсөлдөхүйц чанараа интерьер дизайнаар илэрхийлдэг болсон. Иймд ажлындаа бүтээмж, сэтгэл ханамжийг өгөх, байгууллагаа урт хугацаанд эдийн засгийн хэмнэлтийг бий болгохын зэрэгцээ ухаалаг, оновчтой тавилгын шийдэл бүхий цогц үйлчилгээ үзүүлэх нь гол зорилго. “Artistic Living” уриан дор үргэлж тавилгын чиг хандлагыг тодорхойлогч байх, эрхэм хэрэглэгчдэдээ сэтгэлд нийцсэн чанартай, акууптэй үйлчилгээг хүргэхээр ажиллаж байна.<br /><br />
                    
2017 оноос хойш үйл ажиллагаагаа өргөжүүлэн, төлсөөр өнөөдөр өндөр хүчин чадал бүхий өөрийн үйлдвэрт дотоодын хэрэглэгчдийн онцлогт тохирсон тавилгыг үйлдвэрлэхийн сацуу тавилга байршуулах болон орон зайн онцгий төлөвлөлтийн мэргэжлийн зөвлөгөө өгөх, план зураг гаргах, борлуулалтын дараах тавилгад баталгаа засвар үйлчилгээ, сэлбэг хэрэгслээр тогтмол хангах үйлчилгээг үзүүлдэг болоод байна. Мөн дэлхийн зах зээл дээрээс шинэ шилдэг шийдэл бүхий албан тасалгааны болон гэр ахуйн тавилга нийлүүлж, үйлдвэрлэж байна. Таны хэрэгцээнд тэс нийцэх дэлхийн шилдэг брэндүүдийн хамгийн чухал орон зайд…`}
                    className="text-[#2a2a2a] text-[15.4px] leading-[2.05] max-w-[820px] transition-all duration-500 group-hover:opacity-90"
                />
            </BlockDiv>

            {/* Буйдангийн зураг */}
            <div className="relative z-0 -mt-[100px] translate-y-[100px] transition-all duration-700 ease-in-out">
                <img
                    src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg"
                    alt="Furniture"
                    className="w-full h-[400px] object-cover object-bottom"
                />
            </div>

            {/* ZEN ART logo */}
            {/* <div className="absolute bottom-[36px] left-[48px] bg-[#1a1a1a] w-[270px] h-[120px] px-6 py-4 z-20 flex flex-col items-start justify-center space-y-1 shadow-xl transition-all duration-300 hover:scale-105">
                <img
                    src="/images/zenart-logo-white.png"
                    alt="ZenArt Logo"
                    className="h-[28px] mb-[6px]"
                />
                <TextHtml
                    value="ZEN ART"
                    className="text-white text-[15px] tracking-[0.15em] font-medium"
                />
            </div> */}
        </BlockDiv>
    );
};
