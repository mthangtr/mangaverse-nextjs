"use client";
import { Manga } from "@/types/mangaTypes";
import MangaCard from "@/components/MangaCard";
import { Pagination } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

function Content({
  data,
  pageNum,
  page,
}: {
  data: Manga[];
  pageNum: number;
  page: any;
}) {
  const router = useRouter();

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      router.push(`?page=${value}`);
      window.scrollTo(100, 100);
    },
    [router]
  );

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
            page={page}
            defaultPage={1}
            onChange={handlePageChange}
            count={pageNum}
            variant="outlined"
            shape="rounded"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
