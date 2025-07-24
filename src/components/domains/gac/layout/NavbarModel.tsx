'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const models = [
    { name: 'AION UT', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753325876/autozar6/mainimages/2025/gac/aion_ut_ztdtmn.png', link: '#' },
    { name: 'AION Y', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/Y_sfzsz7.png', link: '#' },
    { name: 'E9', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/e9_iatt2x.png', link: '#' },
    { name: 'NEW EMPOW', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753328079/autozar6/mainimages/2025/gac/new_empowwww_axevyv.webp', link: '#' },
    { name: 'GS4 MAX', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/gs4_max_c1l3mp.png', link: '#' },
    { name: 'M8', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/m8_ikzbus.png', link: '#' },
    { name: 'M6 PRO', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327444/autozar6/mainimages/2025/gac/m6_pro_qmrlmx.webp', link: '#' },
    { name: 'ALL NEW GS8', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/gs8_all_new_bxh4yb.png', link: '#' },
    { name: 'GS3 EMZOOM', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327445/autozar6/mainimages/2025/gac/emzoom_lvautu.png', link: '#' },
    { name: 'EMKOO', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327444/autozar6/mainimages/2025/gac/emkoo_pfe0ah.webp', link: '#' },
    { name: 'AION ES', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327444/autozar6/mainimages/2025/gac/es_aion_hg04pj.png', link: '#' },
    { name: 'AION V', image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753327444/autozar6/mainimages/2025/gac/aion_V_dn22kp.png', link: '#' },
];

export default function NavbarModel() {
    const firstRow = models.slice(0, 6);
    const secondRow = models.slice(6);

    const renderModel = (model: (typeof models)[0], index: number) => (
        <a
            key={index}
            href={model.link}
            className="group flex flex-col items-center justify-center hover:bg-gray-100 rounded-lg p-4 transition duration-300"
        >
            <div className="h-32 flex items-center justify-center">
                <Image
                    src={model.image}
                    alt={model.name}
                    width={120}
                    height={80}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <p className="text-base font-semibold mt-3 text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                {model.name}
            </p>
        </a>
    );

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl w-screen px-16 py-8 border-t border-gray-200"
        >
            {/* First row */}
            <div className="grid grid-cols-6 gap-8 max-w-7xl mx-auto pb-6">
                {firstRow.map(renderModel)}
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto border-b border-gray-300 mb-6"></div>

            {/* Second row */}
            <div className="grid grid-cols-6 gap-8 max-w-7xl mx-auto">
                {secondRow.map(renderModel)}
            </div>
        </motion.div>
    );
}
