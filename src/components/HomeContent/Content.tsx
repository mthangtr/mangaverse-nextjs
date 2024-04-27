"use client";
import { Manga } from "@/types/mangaTypes";
import MangaCard from "@/components/MangaCard";
import { Pagination } from "@mui/material";

function Content({ data }: { data: Manga[] }) {
  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((manga) => (
            <MangaCard key={manga.id} data={manga} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Pagination
            count={10}
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
