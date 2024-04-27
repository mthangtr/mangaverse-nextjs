"use client";
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import HomeContent from "@/components/HomeContent/HomeContent";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="py-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center pb-4">Hot Manga</h1>
        <Carousel />
      </div>
      <div className="pb-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold pb-4 text-center">Daily Updates</h1>
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
