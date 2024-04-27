"use client";
import dynamic from "next/dynamic";
import { Manga } from "@/types/mangaTypes";
import MangaCard from "@/components/MangaCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Slider({ data }: { data: Manga[] } = { data: [] }) {
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
        navText={["<div>Prev</div>", "<div>Next</div>"]}
      >
        {data.map((item) => (
          <MangaCard key={item.id} data={item} />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
