"use client";
import Content from "./Content";
import axios from "axios";
import { Manga } from "@/types/mangaTypes";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const getNewMangaData = async (page: any) => {
  const { data } = await axios.get<Manga[]>(
    `http://localhost:8080/api/manga/home?page=${page}`
  );
  return data;
};

const getPageNum = async () => {
  const { data } = await axios.get<number>(
    `http://localhost:8080/api/manga/total-manga-number`
  );
  return Math.ceil(data / 8);
};

function NewContent() {
  const [pageNum, setPageNum] = useState(0);
  const [mangaData, setMangaData] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pageParam: number = parseInt(searchParams.get("page") || "1", 10);
  const page = pageParam - 1;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pageNum = await getPageNum();
        const data = await getNewMangaData(page);
        setPageNum(pageNum);
        setMangaData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Content pageNum={pageNum} data={mangaData} page={pageParam} />
    </div>
  );
}

export default NewContent;
