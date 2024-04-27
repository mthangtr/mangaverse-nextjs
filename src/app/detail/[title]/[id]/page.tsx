import axios from "axios";
import MangaDetail from "@/components/MangaDetail/MangaDetail";
import { Manga } from "@/types/mangaTypes";

const MangaDetailGET = async ({ params }: { params: any }) => {
  const { data } = await axios.get<Manga>(
    `http://localhost:8080/api/manga/service/detail/${params.id}`
  );

  return (
    <div>
      <MangaDetail data={data} />
    </div>
  );
};

export default MangaDetail;
