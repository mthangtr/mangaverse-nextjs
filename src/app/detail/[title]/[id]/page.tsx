import axios from "axios";
import MangaDetail from "@/components/MangaDetail/MangaDetail";
import { Manga } from "@/types/Global";

async function MangaDetailGET(mangaId: number) {
  const { data } = await axios.get<Manga>(
    `http://localhost:8080/api/manga/service/detail/${mangaId}`
  );

  return data;
}

const Detail = async ({ params }: { params: any }) => {
  const data = await MangaDetailGET(params.id);
  return (
    <div>
      <MangaDetail data={data} />
    </div>
  );
};

export default Detail;
