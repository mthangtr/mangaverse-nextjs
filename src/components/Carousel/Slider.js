import React from "react";
import MangaCard from "@/components/MangaCard";
var $ = require("jquery");
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

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
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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

function Slider() {
    return (
        <div className="max-w-4xl flex flex-col justify-center items-center">
            <OwlCarousel
                className="owl-theme"
                loop={true}
                margin={10}
                items={5}
                dots={false}
                nav={true}
                lazyLoad={true}
                autoplay={true}
                autoplayTimeout={3000}
                autoplayHoverPause={true}
                navText={[
                    '<div>Prev</div>',
                    '<div>Next</div>'
                ]}
            >
                {data.map((item) => (
                    <MangaCard key={item.id} data={item} />
                ))}
            </OwlCarousel>
        </div>
    );
}

export default Slider;