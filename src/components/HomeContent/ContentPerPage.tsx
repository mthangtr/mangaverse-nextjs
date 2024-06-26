"use client";
import axios from "axios";
import { Manga } from "@/types/Global.d";
import MangaCard from "@/components/MangaCard";
import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";

export default function ContentPerPage({
  initialPaginationData,
}: {
  initialPaginationData: Manga[];
}) {
  const [data, setData] = useState<Manga[]>(initialPaginationData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (currentPage === 1 && data === initialPaginationData) {
      return;
    }
    const getMangaPerPage = async (currentPage: number) => {
      const { data } = await axios.get<Manga[]>(
        `http://localhost:8080/api/manga/home?page=${currentPage}`
      );
      setData(data);
    };

    getMangaPerPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const getTotalPage = async () => {
      try {
        const { data } = await axios.get<number>(
          `http://localhost:8080/api/manga/total-manga-number`
        );
        setTotalPage(Math.ceil(data / 8));
      } catch (error) {
        console.error("Failed to fetch total page number:", error);
      }
    };

    getTotalPage();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((manga) => (
            <MangaCard key={manga.id} data={manga} />
          ))}
        </div>
        <div className="mt-4 flex justify-center items-center">
          <Pagination
            page={currentPage}
            defaultPage={1}
            count={totalPage}
            variant="outlined"
            shape="rounded"
            className="mt-4"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
