'use client';

import Image from 'next/image';

const techItems = [
    {
        title: 'Intelligent System',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753331170/autozar6/mainimages/2025/gac/interlligent_knvme2.jpg',
        link: '#',
    },
    {
        title: 'Engine & Battery',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753331171/autozar6/mainimages/2025/gac/engine_and_battery_cng8jb.png',
        link: '#',
    },
    {
        title: 'Intelligent Factory',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753331170/autozar6/mainimages/2025/gac/factory_y21zr6.png',
        link: '#',
    },
    {
        title: 'Safety',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753331170/autozar6/mainimages/2025/gac/safety_ztkxkr.jpg',
        link: '#',
    },
    {
        title: 'Cutting-edge Technology',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753331169/autozar6/mainimages/2025/gac/cutting-edge_pcmk1l.jpg',
        link: '#',
    },
];

export default function NavbarTechnology() {
    return (
        <div className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-16 shadow">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {techItems.map((item) => (
                    <a
                        key={item.title}
                        href={item.link}
                        className="group flex flex-col items-center justify-between h-[200px] rounded-lg hover:bg-gray-100 transition duration-300 p-2"
                    >
                        <div className="w-[180px] h-[120px] overflow-hidden rounded-[6px] flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={180}
                                height={120}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-center text-base font-semibold text-gray-800 mt-3 group-hover:text-orange-500 transition-colors duration-300">
                            {item.title}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}
