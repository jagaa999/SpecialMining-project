'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';

export default function PagePartner() {
    return (
        <div className="w-full bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main */}
            <main className="w-full">
                {/* Section 1: Image */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753849364/autozar6/mainimages/2025/gac/partner1_gkxbld.jpg"
                        alt="Partner Section 1"
                        className="w-full"
                    />
                </section>

                {/* Section 2: Video */}
                <section className="w-full min-h-screen flex justify-center items-center bg-white px-4 py-8">
                    <video
                        src="https://res.cloudinary.com/dg2qmka48/video/upload/v1753849543/autozar6/mainimages/2025/gac/partner2_dn0eta.mp4"
                        className="w-full max-w-[1280px] h-auto rounded-lg shadow-lg"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </section>


                {/* Section 3: Image */}
                <section className="w-full flex justify-center bg-black">
                    <img
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753849365/autozar6/mainimages/2025/gac/partner3_qaywgn.jpg"
                        alt="Partner Section 3"
                        className="w-full"
                    />
                </section>

                {/* Section 4 – Contact */}
                <section className="w-full bg-white py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="max-w-3xl mx-auto text-center px-4"
                    >
                        <h2 className="text-3xl font-semibold text-black mb-4">Contact</h2>
                        <p className="text-gray-800 mb-2">
                            Dealership application email: <span className="font-medium">GACI_CMD_CDS_OF@gac-international.com</span>
                        </p>
                        <p className="text-gray-800">
                            Add: No.60, Donglong Avenue, Panyu District, Guangzhou, People's Republic of China
                        </p>
                    </motion.div>
                </section>

            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
