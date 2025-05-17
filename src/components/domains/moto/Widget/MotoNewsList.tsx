// pages/news.tsx
import React from "react";
import MotoNewsCard from "./MotoNewsCard";

const newsItems = [
  {
    image: "/images/news1.jpg",
    title: "Таксины жолоочид шийтгэл биш шийдэл хэрэгтэй",
    date: "2025-05-01",
    link: "/news/1",
  },
  {
    image: "/images/news2.jpg",
    title: "2024 Baic BJ40 автомашины тойм",
    date: "2025-04-28",
    link: "/news/2",
  },
  {
    image: "/images/news3.jpg",
    title: "Дэлхийн банкнаас түргэн тусламжийн 75 автомашин олгох тухай",
    date: "2025-04-25",
    link: "/news/3",
  },
  // Шаардлагатай тоогоор нэмнэ үү
];

export default function MotoNewsList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Мэдээ мэдээлэл</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <MotoNewsCard
            key={index}
            image={item.image}
            title={item.title}
            date={item.date}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
