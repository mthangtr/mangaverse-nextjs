import HomeDefault from "@/components/HomeDefault";
import axios from "axios";
import { Manga } from "@/types/mangaTypes";

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

async function Home({ pageParam }: { pageParam: number }) {
  const carouselData = await getCarouselData();
  return (
    <div>
      <HomeDefault carouselData={carouselData} />
    </div>
  );
}

export default Home;
