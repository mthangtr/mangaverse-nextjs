import React from "react";
import Slider from "@/components/Carousel/Slider";
import { Manga } from "@/types/mangaTypes";
import NewContent from "./HomeContent/NewContent";

function HomeDefault({ carouselData }: { carouselData: Manga[] }) {
  return (
    <div>
      <div className="min-h-screen">
        <div className="py-4 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center pb-4">Hot Manga</h1>
          <Slider data={carouselData} />
        </div>
        <div className="pb-4 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold pb-4 text-center">Daily Updates</h1>
          <NewContent />
        </div>
      </div>
    </div>
  );
}

export default HomeDefault;
