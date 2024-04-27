import axios from "axios";
import Slider from "./Slider";
import { Manga } from "@/types/mangaTypes";

const Carousel = async () => {
  const { data } = await axios.get<Manga[]>(
    `http://localhost:8080/api/manga/service/home/top12/most-liked`
  );

  return (
    <div>
      <Slider data={data} />
    </div>
  );
};

export default Carousel;
