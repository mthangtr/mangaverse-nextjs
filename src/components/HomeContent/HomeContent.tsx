import { Manga } from "@/types/mangaTypes";
import Content from "./Content";
import axios from "axios";

const HomeContent = async () => {
  const { data } = await axios.get<Manga[]>(
    `http://localhost:8080/api/manga/...`
  );
  return (
    <div>
      <Content data={data} />
    </div>
  );
};

export default HomeContent;
