// mungundent/components/MungundentServiceCard.tsx
import React from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const MungundentServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    imageUrl,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default MungundentServiceCard;
