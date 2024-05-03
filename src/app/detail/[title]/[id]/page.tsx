import axios from "axios";
import MangaDetail from "@/components/Pages/MangaDetail";
import { Manga, Chapter } from "@/types/Global";
import SidebarLayout from "@/app/layout/SidebarLayout";

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
    <SidebarLayout>
      <MangaDetail data={data} chaptersInit={chapter} />
    </SidebarLayout>
  );
};

export default Detail;
