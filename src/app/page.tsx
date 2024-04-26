"use client";
import React from "react";
import MangaCard from "@/components/MangaCard";
import Slider from "@/components/Carousel/Slider";

const data = [
  {
    id: 1,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 2,
    image: "https://st.nettruyentt.com/data/comics/82/shy.jpg",
    title: "CÔNG TỬ BIỆT TÚ!dfjkghdfjkbgjhfgbgjkfgjkfdfjdhjgjkfd",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 3,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 4,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 5,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 6,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 7,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
  {
    id: 8,
    image:
      "https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg",
    title: "CÔNG TỬ BIỆT TÚ!",
    Category: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Historical",
      "Horror",
      "Mystery",
      "Romance",
      "Shoujo",
      "Shounen",
      "Supernatural",
      "Tragedy",
    ],
    chapters: [
      { id: 1, name: "Chapter 1", date: "Date 1" },
      { id: 2, name: "Chapter 2", date: "Date 2" },
      { id: 3, name: "Chapter 3", date: "Date 3" },
    ],
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <div className="py-4 flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold text-center pb-4">Weakly Manga</h1>
        <Slider />
      </div>
      <div className="p-2">
        <h1 className="text-lg font-bold pb-4 text-center">Daily Updates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((item) => (
            <MangaCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
