'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageService() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="w-full">
                {/* Section 1 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753861021/autozar6/mainimages/2025/gac/service1_adztyz.jpg"
                        alt="Service Section 1"
                        className="w-full"
                    />
                </section>

                {/* Section 2 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753861021/autozar6/mainimages/2025/gac/service2_lsajhl.webp"
                        alt="Service Section 2"
                        className="w-full"
                    />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
