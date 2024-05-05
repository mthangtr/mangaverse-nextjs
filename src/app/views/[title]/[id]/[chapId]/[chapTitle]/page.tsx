import ViewChapter from "@/components/Pages/ChapterDetail/ViewChapter";
import axios from "axios";

interface ViewParams {
  chapId: number;
  id: number;
}

async function getInitialData({ chapId }: { chapId: number }) {
  const { data } = await axios.get(
    `http://localhost:8080/api/chapter/service/detail/${chapId}`
  );
  return data;
}

async function getChaptersByMangaId({ mangaId }: { mangaId: number }) {
  const { data } = await axios.get(
    `http://localhost:8080/api/chapter/service/all-chapter/${mangaId}`
  );
  return data;
}

export default async function View({ params }: { params: ViewParams }) {
  const { chapId, id } = params;
  const chapterData = await getInitialData({ chapId });
  const chapterList = await getChaptersByMangaId({ mangaId: id });
  return <ViewChapter InitData={chapterData} chapterList={chapterList} />;
}
