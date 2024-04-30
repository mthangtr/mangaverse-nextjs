import axios from "axios";
import { Manga } from "@/types/mangaTypes";
import Slider from "./Slider";

const getCarouselData = async () => {
  try {
    const response = await axios.get<Manga[]>(
      "http://localhost:8080/api/manga/service/home/top12/most-liked"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch carousel data:", error);
    throw error;
  }
};

export const CarouselSSR = async () => {
  const carouselData = await getCarouselData();
  return (
    <div>
      <Slider data={carouselData} />
    </div>
  );
};
