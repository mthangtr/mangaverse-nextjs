import { useState, useEffect } from "react";
import MangaCard from "@/components/MangaCard";
import { Manga } from "@/types/mangaTypes";
import axios from "axios";

function HomeContent() {
  const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="p-2">
        <h1 className="text-lg font-bold pb-4 text-center">Daily Updates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((item) => (
            <MangaCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
