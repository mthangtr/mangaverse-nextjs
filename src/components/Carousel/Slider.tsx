import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";

import { Manga } from "@/types/mangaTypes";
import { useEffect, useState } from "react";

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

function Slider() {
  const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/manga/service/home/top12/most-liked")
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          console.error("No data available", res.data);
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

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
