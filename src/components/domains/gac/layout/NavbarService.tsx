'use client';

import Image from 'next/image';

const serviceItem = {
    title: 'Our Service',
    image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753338146/autozar6/mainimages/2025/gac/service_bvdymn.jpg',
    link: '#',
};

export default function NavbarService() {
    return (
        <div className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-16 shadow">
            <div className="flex justify-center max-w-4xl mx-auto">
                <a
                    href={serviceItem.link}
                    className="group flex flex-col items-center justify-between h-[200px] rounded-lg hover:bg-gray-100 transition duration-300 p-2"
                >
                    <div className="w-[180px] h-[120px] overflow-hidden rounded-[6px] flex items-center justify-center">
                        <Image
                            src={serviceItem.image}
                            alt={serviceItem.title}
                            width={180}
                            height={120}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <p className="text-center text-base font-semibold text-gray-800 mt-3 group-hover:text-orange-500 transition-colors duration-300">
                        {serviceItem.title}
                    </p>
                </a>
            </div>
        </div>
    );
}
