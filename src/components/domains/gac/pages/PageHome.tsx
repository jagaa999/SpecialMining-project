'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { motion, useInView } from 'framer-motion';

type Slide = {
    image: string;
    titleImg?: string;
    subtitle: string;
};

const slides: Slide[] = [
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/a8df62c4-39c5-4ea4-baee-1bf310ae6b5b_n1qjnt.webp',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/AION_UT_z5xap5.png',
        subtitle: 'A stylish and intelligent next-gen urban EV crossover',
    },
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753170598/autozar6/mainimages/2025/gac/hd_s9_llh0a8.jpg',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/S7_gscyx5.png',
        subtitle: 'Big on Space, Big on Smarts',
    },
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168603/autozar6/mainimages/2025/gac/aionV_dsoyx9.jpg',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168380/autozar6/mainimages/2025/gac/AION_V_nl2lib.png',
        subtitle: 'Rugged and Smart SUV',
    },
];

export default function PageHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const current = slides[currentSlide];

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <Header />

                {/* Background image with fade */}
                {current.image && (
                    <div
                        className={`absolute inset-0 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={current.image}
                            alt="Background"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Overlay content */}
                <div
                    className={`relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                >
                    {current.titleImg ? (
                        <div className="mb-4 w-64 h-16 relative">
                            <Image
                                src={current.titleImg}
                                alt="Car title"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ) : null}

                    <p className="text-xl mb-6">{current.subtitle}</p>
                    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-white scale-110' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Section 2: GS8 */}
            <section className="relative h-screen w-full">
                {/* Background */}
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753170826/autozar6/mainimages/2025/gac/821ca7f3-8438-4280-bdfe-325e5ee62c74_psbmea.webp"
                    alt="GS8 Background"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-4 w-64 h-16 relative"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753170825/autozar6/mainimages/2025/gac/GS8_f02nhy.png"
                            alt="GS8 Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl mb-6"
                    >
                        Mid-to-large intelligent SUV
                    </motion.p>

                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
                    >
                        Learn More
                    </motion.button>
                </div>
            </section>

            {/* Section 3: AION Y */}
            <section className="relative h-screen w-full">
                {/* Background */}
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753238630/autozar6/mainimages/2025/gac/aion_y_car_sdchsj.jpg"
                    alt="AION Y Background"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-4 w-64 h-16 relative"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753238629/autozar6/mainimages/2025/gac/AION_Y_kqcjpv.png"
                            alt="AION Y Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl mb-6"
                    >
                        New Trend Pure Electric SUV
                    </motion.p>

                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
                    >
                        Learn More
                    </motion.button>
                </div>
            </section>

            {/* Section 4: HYPTEC */}
            <section className="relative h-screen w-full">
                {/* Background */}
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753239116/autozar6/mainimages/2025/gac/hyptec_car_rmq4p5.jpg"
                    alt="HYPTEC Background"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="mb-4 w-64 h-16 relative"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753239114/autozar6/mainimages/2025/gac/hyptec_hit_fly0bc.png"
                            alt="HYPTEC Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl mb-6"
                    >
                        Luxury Electric SUV
                    </motion.p>

                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
                    >
                        Learn More
                    </motion.button>
                </div>
            </section>

            {/* Section 5: GAC Introduction */}
            <section className="relative w-full bg-black text-white px-6 h-screen">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center h-full">
                    {/* Left Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="space-y-6"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753169877/autozar6/mainimages/2025/gac/6070626e-eb29-4424-a6c2-ebb94ee9aa57_lm1hx9.webp"
                            alt="GAC Logo"
                            width={120}
                            height={30}
                            className="object-contain"
                        />

                        <p className="text-lg leading-relaxed">
                            Гуанжөү Автомашины Групп ХХК (GAC) нь 1997 оны 6-р сард байгуулагдсан. 2023 онд тус компанийн үйлдвэрлэл болон борлуулалт хоёулаа 2.5 саяас давж, өмнөх оныхоос өсөлттэй, эерэг үзүүлэлттэй гарсан байна.
                        </p>

                        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                            Learn More
                        </button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753241521/autozar6/mainimages/2025/gac/gacccc_ibbkkh.png"
                            alt="GAC Detail Image"
                            width={600}
                            height={400}
                            className="object-contain w-full h-auto mx-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Technological Innovation */}
            <section className="relative w-full bg-black text-white px-6 h-screen pb-24"> {/* pb-24 added here */}
                <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center space-y-10">

                    {/* Text Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="w-full px-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            Technological Innovation
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto text-center"> {/* max-w updated */}
                            GAC-ийн Судалгаа, Хөгжлийн Төвд бид дараах дөрвөн чиглэлээр томоохон ахиц гаргахыг зорьж,
                            технологийн шинэчлэлд улам их хөрөнгө оруулалт хийхээр төлөвлөж байна.
                            Бид технологийн хөгжлөөр дамжуулан бүтээгдэхүүний хөгжлийг улам хүчирхэгжүүлж байна.
                        </p>

                        <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                            Discover
                        </button>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="w-full flex justify-center items-center"
                    >
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753242937/autozar6/mainimages/2025/gac/%D1%8B%D0%B9%D0%B9%D0%B1%D0%B9%D1%8B_aucxp6.png"
                            alt="Technological Innovation Car"
                            width={1200}
                            height={600}
                            className="object-contain w-full max-w-[calc(100%-40px)] mx-auto h-auto"
                        />
                    </motion.div>
                </div>
            </section>


            <Footer />
        </main>
    );
}

const MotionGs8Overlay = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="mb-4 w-64 h-16 relative"
            >
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753170825/autozar6/mainimages/2025/gac/GS8_f02nhy.png"
                    alt="GS8 Logo"
                    fill
                    className="object-contain"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl mb-6"
            >
                Mid-to-large intelligent SUV
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
                Learn More
            </motion.button>
        </div>
    );
};
