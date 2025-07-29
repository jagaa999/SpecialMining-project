import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH3 from "atomv2/components/Text/TextH3";
import TextH4 from "atomv2/components/Text/TextH4";
import TextHtml from "atomv2/components/Text/TextHtml";

const PageIntro = () => {
  return (
    <>
      {/* ✅ Hero */}

      <BlockSection
        className="relative py-32 text-center bg-cover bg-center transition-all duration-300 text-white"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751343171/autozar6/mainimages/2025/sata/intro_mjs3oy.jpg)`,
        }}>
        <BlockDiv className="absolute inset-0 bg-black/70 z-0" />
        <PanelMain className="relative z-10 ">
          <BlockFlexCol className="gap-16 text-white">
            <TextH1
              value="SATA Tools – Танилцуулга"
              className="text-white/90"
            />
            <TextH4
              value="Мэргэжлийн багаж хэрэгслийн дэлхийн брэнд — Хүч чадал, нарийвчлал, итгэлцэл."
              className="text-white/90"
            />
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ About SATA */}

      <BlockSection className="bg-yellow-100 py-24">
        <PanelMain className="grid md:grid-cols-2 gap-12 items-center">
          <BlockFlexCol>
            <TextH1 value="SATA-ийн тухай" />
            <TextHtml
              value="1997 онд байгуулагдсан SATA Tools нь гар багажны салбартаа тэргүүлэгч брэнд болж чадсан. Эхэндээ хязгаарлагдмал үйлдвэрлэлтэй байсан ч өнөөдөр дэлхийн 130 гаруй оронд ISO, DIN стандартын шаардлагыг хангасан бүтээгдэхүүнээ нийлүүлдэг."
              className="text-justify"
            />
            <TextHtml
              value="SATA нь мэргэжлийн механик, авто засвар, үйлдвэрийн хэрэглээнд зориулагдсан өндөр чанартай багаж хэрэгслүүдийг тасралтгүй хөгжүүлж, шинэлэг шийдлүүдийг санал болгодог."
              className="text-justify"
            />
            <TextHtml
              value="Монгол дахь албан ёсны борлуулагчаар бид танд баталгаат, найдвартай сонголтыг санал болгож байна."
              className="text-justify"
            />
          </BlockFlexCol>

          <RenderAtom
            type="image"
            value="https://res.cloudinary.com/dg2qmka48/image/upload/v1751341800/autozar6/mainimages/2025/sata/actino_lhr0jd.jpg"
            alt="SATA Factory"
            className="object-cover object-center w-full h-80"
          />
        </PanelMain>
      </BlockSection>

      {/* ✅ Brand History */}

      <BlockSection className="bg-white py-24">
        <PanelMain className="grid md:grid-cols-2 gap-12 items-center">
          <RenderAtom
            type="image"
            value="https://res.cloudinary.com/dg2qmka48/image/upload/v1751344687/autozar6/mainimages/2025/sata/history_j0xmux.jpg"
            alt="SATA History"
            className="object-contain bg-white w-full h-80"
          />

          <BlockFlexCol>
            <TextH2 value="Брэндийн түүхэн хөгжил" />
            <TextHtml value="SATA нь Apex Tool Group-ийн бүрэлдэхүүнд багтдаг бөгөөд инноваци, технологи, чанарыг хослуулсан бүтээгдэхүүн үйлдвэрлэдэг. 2000-аад оноос олон улсын үзэсгэлэнгүүдэд амжилттай оролцож, мэргэжлийн зах зээлд тэргүүлэгчийн байр сууриа тогтоосон." />
            <TextHtml value="Cr-V ган материал, хэрэглэгчийн эрэлтэд нийцсэн дизайн нь SATA-г онцгой болгодог." />
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ Why SATA - Improved Design */}
      <BlockSection className="relative bg-gradient-to-r from-[#101010] to-[#1e1e1e] text-white py-24">
        <BlockDiv type="div" className="absolute inset-0">
          <BlockDiv
            type="div"
            className="w-full h-full bg-[url('https://res.cloudinary.com/dg2qmka48/image/upload/v1751348327/autozar6/mainimages/2025/sata/tools_bg_p7nizk.jpg')] bg-cover bg-center opacity-10"
          />
        </BlockDiv>

        <PanelMain className="relative text-center">
          <BlockFlexCol className="gap-12">
            <TextH1 value='Яагаад <span class="text-green-500">SATA</span>-г сонгох вэ?' />
            <TextH4 value="Бид хэрэглэгч бүртээ найдвартай, чанартай, баталгаат бүтээгдэхүүнээр үйлчилдэг." />

            <BlockFlexRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                {
                  title: "Стандартад нийцсэн",
                  desc: "ISO, DIN стандартын шаардлага хангасан үйлдвэрлэл.",
                },
                {
                  title: "Бат бөх материал",
                  desc: "Cr-V болон S2 гангаар хийгдсэн тул удаан эдэлгээтэй.",
                },
                {
                  title: "Мэргэжлийн шийдэл",
                  desc: "Засвар, үйлдвэрлэл, угсралтын хэрэглээнд тохирсон.",
                },
                {
                  title: "Глобал итгэлцэл",
                  desc: "130+ орны хэрэглэгчдийн итгэлийг хүлээсэн брэнд.",
                },
              ].map((item, index) => (
                <BlockFlexCol
                  key={index}
                  className="bg-gray-900 transition rounded-brand p-6 shadow-brand border border-white/5 h-full justify-start">
                  <TextH3 value={item.title} className="text-brand" />
                  <TextHtml value={item.desc} className="text-white/80" />
                </BlockFlexCol>
              ))}
            </BlockFlexRow>
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ Global Reach */}
      <BlockSection className="bg-[#fefefe] py-24">
        <PanelMain>
          <BlockHalf stretch={true}>
            <BlockFlexCol>
              <TextH3 value="SATA дэлхийн зах зээлд" />
              <TextHtml value="SATA бүтээгдэхүүнүүд одоогоор Ази, Европ, Хойд Америк зэрэг тивийн 130 гаруй оронд албан ёсоор нийлүүлэгдэж байна. Бид дэлхийн хэрэглэгчдийн хэрэгцээ, шаардлагад нийцсэн шийдлийг санал болгож, хэрэглэгчдийн итгэлийг хүлээсээр байна." />
              <TextHtml value="Чанартай үйлдвэрлэл, хурдан логистик, хэрэглэгчийн найдвартай үйлчилгээний систем нь SATA-г бусдаас ялгаруулдаг." />
            </BlockFlexCol>

            <RenderAtom
              type="image"
              value="https://res.cloudinary.com/dg2qmka48/image/upload/v1751355296/autozar6/mainimages/2025/sata/delhiin_tl7rng.jpg"
              alt="SATA World Map"
              className="object-cover w-full h-full"
            />
          </BlockHalf>
        </PanelMain>
      </BlockSection>

      {/* ✅ Customer Trust */}
      <BlockSection className="bg-gradient-to-br from-green-50 to-white py-24 text-center">
        <PanelMain className="space-y-12">
          <TextH2 value="Хэрэглэгчдийн итгэл дээр тулгуурласан хөгжүүлэлт" />
          <TextHtml value="Бидний хамгийн том үнэлэмж бол таны сэтгэл ханамж. SATA-ийн мэргэжлийн хэрэглээнд зориулсан шийдлүүд нь зөвхөн чанар бус, хэрэглэгчийн хэрэгцээ, туршлагад үндэслэсэн байдаг." />
        </PanelMain>
      </BlockSection>

      {/* ✅ Eco Commitment */}
      <BlockSection className="bg-slate-100 py-24">
        <PanelMain>
          <BlockHalf stretch={true}>
            <RenderAtom
              type="image"
              value="https://res.cloudinary.com/dg2qmka48/image/upload/v1751356001/autozar6/mainimages/2025/sata/sata_eco_ru9tsv.jpg"
              alt="SATA Eco Friendly"
              className="object-cover w-full h-full"
            />

            <BlockFlexCol>
              <TextH3 value="Тогтвортой, байгальд ээлтэй үйлдвэрлэл" />
              <TextHtml value="SATA нь байгаль орчны нөлөөг багасгахын төлөө байнгын хүчин чармайлт гаргаж, ногоон үйлдвэрлэлийн стандартыг мөрдөж ажилладаг." />
              <TextHtml value="Эко сав баглаа боодол, хог хаягдлын менежмент, эрчим хүчний хэмнэлт зэрэг чиглэлээр дэлхийд жишиг байхаар зорьж байна." />
            </BlockFlexCol>
          </BlockHalf>
        </PanelMain>
      </BlockSection>
    </>
  );
};

export default PageIntro;
