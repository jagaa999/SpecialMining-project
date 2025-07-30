'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageCutedge() {
    const images = [
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753863012/autozar6/mainimages/2025/gac/cut1_ln2ssn.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753863005/autozar6/mainimages/2025/gac/cut2_bw5hwk.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753863012/autozar6/mainimages/2025/gac/cut3_tunexk.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753863012/autozar6/mainimages/2025/gac/cut4_uqh6ld.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753862992/autozar6/mainimages/2025/gac/cut5_gj86ar.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753862976/autozar6/mainimages/2025/gac/cut6_dut22b.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753862977/autozar6/mainimages/2025/gac/cut7_azrib6.webp',
        'https://res.cloudinary.com/dg2qmka48/image/upload/v1753862976/autozar6/mainimages/2025/gac/cut8_dd5qsz.webp',
    ];

    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main */}
            <main className="w-full">
                {images.map((url, index) => (
                    <section key={index} className="w-full flex justify-center bg-black">
                        <img src={url} alt={`Cutting-edge ${index + 1}`} className="w-full" />
                    </section>
                ))}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
