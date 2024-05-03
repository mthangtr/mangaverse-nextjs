import axios from "axios";
import { Manga } from "@/types/Global.d";
import HomeContent from "@/components/Pages/HomeContent";
import SidebarLayout from "./layout/SidebarLayout";

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

export default async function Home() {
  const carouselData = await getCarouselData();
  return (
    <SidebarLayout>
      <HomeContent carouselData={carouselData} />
    </SidebarLayout>
  );
}
