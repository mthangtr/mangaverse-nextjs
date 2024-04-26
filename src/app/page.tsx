"use client";
import React from "react";
import Slider from "@/components/Carousel/Slider";
import HomeContent from "@/components/HomeContent/HomeContent";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="py-4 flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold text-center pb-4">Weakly Manga</h1>
        <Slider />
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
