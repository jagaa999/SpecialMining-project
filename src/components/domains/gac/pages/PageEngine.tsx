'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageBattery() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="w-full">
                {[
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847954/autozar6/mainimages/2025/gac/battery1_z8zbvi.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847948/autozar6/mainimages/2025/gac/battery2_alovob.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847947/autozar6/mainimages/2025/gac/battery3_xabq0v.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847947/autozar6/mainimages/2025/gac/battery4_p9iz44.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847947/autozar6/mainimages/2025/gac/battery5_pcnoxz.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847948/autozar6/mainimages/2025/gac/battery6_t6hwkn.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847946/autozar6/mainimages/2025/gac/battery7_hkluay.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847945/autozar6/mainimages/2025/gac/battery8_v9d3xx.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847946/autozar6/mainimages/2025/gac/battery9_fkb3nk.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753847945/autozar6/mainimages/2025/gac/battery10_relmqj.webp"
                ].map((url, index) => (
                    <section key={index} className="w-full flex justify-center bg-black">
                        <img
                            src={url}
                            alt={`Battery Section ${index + 1}`}
                            className="w-full"
                        />
                    </section>
                ))}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
