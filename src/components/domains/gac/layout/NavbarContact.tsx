'use client';

import Image from 'next/image';

const contactItems = [
    {
        title: 'Become a Partner',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753337971/autozar6/mainimages/2025/gac/partner_rri84f.jpg',
        link: 'Partner', // энэ нь internal page гэж үзэж байгаа
        external: false,
    },
    {
        title: 'Jobs',
        image: 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753337973/autozar6/mainimages/2025/gac/pexels-pixabay-416405_aaef5n.jpg',
        link: 'https://career.gac-international.com/apply/gac-international/100006013/#/',
        external: true,
    },
];

export default function NavbarContact() {
    return (
        <div className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-16 shadow">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {contactItems.map((item) => (
                    <a
                        key={item.title}
                        href={item.link}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : undefined}
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
