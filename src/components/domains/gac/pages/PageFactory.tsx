'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageFactory() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main */}
            <main className="w-full">
                {/* Section 1 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753862287/autozar6/mainimages/2025/gac/factory1_batnbt.webp"
                        alt="Factory 1"
                        className="w-full"
                    />
                </section>

                {/* Section 2 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753862287/autozar6/mainimages/2025/gac/factory2_qwxfa9.webp"
                        alt="Factory 2"
                        className="w-full"
                    />
                </section>

                {/* Section 3 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753862286/autozar6/mainimages/2025/gac/factory3_mgrnic.webp"
                        alt="Factory 3"
                        className="w-full"
                    />
                </section>

                {/* Section 4 */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753862286/autozar6/mainimages/2025/gac/factory4_xuzojt.webp"
                        alt="Factory 4"
                        className="w-full"
                    />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
