"use client";
import { Manga } from "@/types/Global.d";
import MangaCard from "@/components/MangaCard";
import { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => (
    <div className="min-h-96 flex justify-center items-center">
      <p>Loading...</p>
    </div>
  ),
});

export default function Carousel({ carouselData }: { carouselData: Manga[] }) {
  const [data, setData] = useState<Manga[]>(carouselData);
  return (
    <div className="max-w-full flex flex-col justify-center items-center">
      <ReactOwlCarousel
        className="owl-theme custom-carousel"
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
          "<div class='custom-nav prev'><</div>",
          "<div class='custom-nav next'>></div>",
        ]}
      >
        {data.map((item) => (
          <MangaCard key={item.id} data={item} />
        ))}
      </ReactOwlCarousel>
    </div>
  );
}
