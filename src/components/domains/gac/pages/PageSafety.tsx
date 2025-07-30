'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function PageSafety() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="w-full">
                {[
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753848300/autozar6/mainimages/2025/gac/safety1_xjuo9u.webp",
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1753848300/autozar6/mainimages/2025/gac/safety2_jw4d78.webp"
                ].map((url, index) => (
                    <section key={index} className="w-full flex justify-center bg-black">
                        <img
                            src={url}
                            alt={`Safety Section ${index + 1}`}
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
