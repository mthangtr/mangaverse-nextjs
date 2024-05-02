import axios from "axios";
import MangaDetail from "@/components/MangaDetail/MangaDetail";
import { Manga, Chapter } from "@/types/Global";

async function MangaDetailGET(mangaId: number) {
  const { data } = await axios.get<Manga>(
    `http://localhost:8080/api/manga/service/detail/${mangaId}`
  );

  return data;
}

async function moreChapterGET({
  mangaId,
  page,
}: {
  mangaId: number;
  page: number;
}) {
  const { data } = await axios.get<Chapter[]>(
    `http://localhost:8080/api/manga/service/detail/${mangaId}/chapters?page=${page}`
  );

  return data;
}

const Detail = async ({ params }: { params: any }) => {
  const data = await MangaDetailGET(params.id);
  const chapter = await moreChapterGET({ mangaId: params.id, page: 1 });
  return (
    <div>
      <MangaDetail data={data} chaptersInit={chapter} />
    </div>
  );
};

export default Detail;
