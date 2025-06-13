// mungundent/pages/PageServices.tsx
import MungundentHeader from "../components/MungundentHeader";
import MungundentFooter from "../components/MungundentFooter";

export default function PageServices() {
    return (
        <main className="bg-white text-gray-800 font-[Arial]">
            <MungundentHeader />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#00A8A8] to-[#006F6F] text-white py-24 text-center px-4">
                <h1 className="text-5xl font-bold mb-4 drop-shadow">Бидний Үйлчилгээ</h1>
                <p className="text-xl max-w-3xl mx-auto">Та бүхэнд зориулсан орчин үеийн, Япон аргачлалд суурилсан иж бүрэн шүдний эмчилгээ</p>
            </section>

            {/* Service List */}
            <section className="max-w-7xl mx-auto py-24 px-6 space-y-24">

                <div className="md:flex items-center gap-12">
                    <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/9b8b1438-ba9d-4108-a850-6f4ef4e2bcca.jpg?t=1749805562274" alt="Implant" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-3xl font-bold mb-4 text-[#1d3557]">Имплант эмчилгээ</h2>
                        <p className="text-lg text-gray-700 mb-4">Шүдгүй хэсгийг байгалийн мэт харагдах хиймэл шүдээр нөхөх мэс заслын орчин үеийн шийдэл. Mungundent нь чанартай, өвдөлт багатай, урт настай имплантыг санал болгодог.</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Японы стандарт суулгац</li>
                            <li>Нэг өдрийн дотор түр шүдтэй болох</li>
                            <li>Баталгаатай, бат бөх үйлчилгээ</li>
                        </ul>
                    </div>
                </div>

                <div className="md:flex items-center gap-12 flex-row-reverse">
                    <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/15acc4a3-9052-4cf5-8f28-0076f3d14fb8.jpg?t=1749805653357" alt="Whitening" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-3xl font-bold mb-4 text-[#1d3557]">Шүд цайруулах</h2>
                        <p className="text-lg text-gray-700 mb-4">Итгэлтэй инээмсэглэлд зориулсан хурдан бөгөөд үр дүнтэй цайруулалт. Mungundent нь аюулгүй, эмзэглэл багатай шийдлийг санал болгодог.</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Лазер болон химийн цайруулалт</li>
                            <li>Бүх насны үйлчлүүлэгчид</li>
                            <li>Японы эрүүл ахуйн стандарт</li>
                        </ul>
                    </div>
                </div>

                <div className="md:flex items-center gap-12">
                    <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/022803d0-b057-4c04-8ff0-51f1a3125e2e.webp?t=1749805703363" alt="Children" className="w-full md:w-1/2 rounded-2xl shadow-xl" />
                    <div className="mt-6 md:mt-0">
                        <h2 className="text-3xl font-bold mb-4 text-[#1d3557]">Хүүхдийн шүдний эмчилгээ</h2>
                        <p className="text-lg text-gray-700 mb-4">Бид хүүхдүүдэд ээлтэй орчин бүрдүүлж, тайван, айдасгүй эмчилгээг санал болгодог. Сүүн шүдний арчилгаа, ломбо, оношилгоо зэрэг бүх үйлчилгээг нэг дор.</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Хүүхдийн сэтгэл зүйд тохирсон аргачлал</li>
                            <li>Эмч, сувилагч нарын онцгой хандлага</li>
                            <li>Япон сургалтын суурьтай техник</li>
                        </ul>
                    </div>
                </div>

            </section>

            <MungundentFooter />
        </main>
    );
}
