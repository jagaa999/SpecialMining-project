// mungundent/pages/PageAbout.tsx
import MungundentHeader from "../components/MungundentHeader";
import MungundentFooter from "../components/MungundentFooter";

export default function PageAbout() {
    return (
        <main className="bg-white text-gray-800 font-[Arial]">
            <MungundentHeader />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#00A8A8] to-[#006F6F] text-white py-24 text-center px-4">
                <h1 className="text-5xl font-bold mb-4 drop-shadow">Бидний Тухай</h1>
                <p className="text-xl max-w-3xl mx-auto">Мэргэжлийн хамт олон, орчин үеийн технологиор таны инээмсэглэлийг бид хамгаална</p>
            </section>

            {/* About Content */}
            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="md:flex gap-16 items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/463630bf-ed9e-4711-b61f-fdcebd6e94e8.jpg?t=1749804998016"
                            alt="Mungundent Clinic Interior"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-[#1d3557]">Мөнгөндент шүдний эмнэлэг</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Манай эмнэлэг нь Япон стандартын эмчилгээ, хүүхдэд ээлтэй орчин, олон жилийн дадлага туршлагатай мэргэжлийн эмч, сувилагч нараар бүрдсэн хамт олонтой. Бид өвдөлт багатай, хурдан шуурхай үйлчилгээ үзүүлэхийн төлөө ажилладаг.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Тоног төхөөрөмжүүд нь CAD/CAM, 3D рентген зэрэг Японоос оруулж ирсэн хамгийн дэвшилтэт технологи бөгөөд үйлчлүүлэгчийн тав тух, аюулгүй байдлыг эрхэмлэнэ.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Инээмсэглэл бол өөртөө итгэх итгэлийн илэрхийлэл. Mungundent танд найдвартай үйлчилгээ, халамж, мэргэжлийн зөвлөгөөг нэг дор санал болгож байна.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-[#f7f8fa] py-20 px-6 border-t border-gray-200">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-[#1d3557] mb-6">Бидний Үнэт зүйлс</h3>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-2">Чанар</h4>
                            <p className="text-gray-600 text-sm">Бид олон улсын стандартад нийцсэн чанарын удирдлагыг мөрддөг.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-2">Халамж</h4>
                            <p className="text-gray-600 text-sm">Үйлчлүүлэгч бүрийн тав тух, сэтгэл ханамжийг чухалчилдаг.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-2">Шинийг эрэлхийлэх</h4>
                            <p className="text-gray-600 text-sm">Технологийн дэвшлийг өдөр тутмын үйлчилгээндээ нэвтрүүлдэг.</p>
                        </div>
                    </div>
                </div>
            </section>

            <MungundentFooter />
        </main>
    );
}
