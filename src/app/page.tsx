import ContentPerPage from "@/components/HomeContent/ContentPerPage";
import Carousel from "@/components/Carousel/Carousel";
import axios from "axios";
import { Manga } from "@/types/Global.d";

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

const Home = async () => {
  const carouselData = await getCarouselData();
  return (
    <div>
      <div>
        <div className="min-h-screen">
          <div className="py-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center pb-4">Hot Manga</h1>
            <Carousel data={carouselData} />
          </div>
          <div className="pb-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold pb-4 text-center">
              Daily Updates
            </h1>
            <ContentPerPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
