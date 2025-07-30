'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageIntelligent() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="w-full">
                {/* Section 1 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753845581/autozar6/mainimages/2025/gac/section1_gwyu8z.webp"
                        alt="Section 1"
                        className="w-full"
                    />
                </section>

                {/* Section 2 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753845904/autozar6/mainimages/2025/gac/section2_xqyjpp.webp"
                        alt="Section 2"
                        className="w-full"
                    />
                </section>

                {/* Section 3 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753845905/autozar6/mainimages/2025/gac/section3_t8nyxr.webp"
                        alt="Section 3"
                        className="w-full"
                    />
                </section>

                {/* Section 4 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753846514/autozar6/mainimages/2025/gac/section5_wd5oau.webp"
                        alt="Section 4"
                        className="w-full"
                    />
                </section>

                {/* Section 5 – Video */}
                <section className="w-full min-h-screen flex justify-center items-center bg-black px-4 py-8">
                    <video
                        src="https://res.cloudinary.com/dg2qmka48/video/upload/v1753846583/autozar6/mainimages/2025/gac/sectionVideo_zms1ev.mp4"
                        className="w-full max-w-[1280px] h-auto rounded-lg shadow-lg"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </section>

                {/* Section 6 – Image after video */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753846751/autozar6/mainimages/2025/gac/section6_mtkvzt.webp"
                        alt="Section 6"
                        className="w-full"
                    />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
