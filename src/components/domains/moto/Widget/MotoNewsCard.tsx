// components/NewsCard.tsx
import React from "react";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, date, link }) => {
  return (
    <a href={link} className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500">{date}</p>
    </a>
  );
};

export default NewsCard;
