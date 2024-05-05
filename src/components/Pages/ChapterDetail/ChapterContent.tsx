"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Page } from "@/types/Global";
import axios from "axios";

async function getChapterContent({ chapterId }: { chapterId: number }) {
  const { data } = await axios.get(
    `http://localhost:8080/api/page/service/page/${chapterId}`
  );

  return data;
}

export default function ChapterContent({ chapterId }: { chapterId: number }) {
  const [pageList, setPageList] = useState<Page[]>([]);

  useEffect(() => {
    getChapterContent({ chapterId }).then((data) => {
      setPageList(data);
    });
  }, [chapterId]);

  return (
    <div>
      {pageList.map((page) => (
        <div key={page.id} className="mt-4">
          <Image src={page.imageUrl} alt="page" width={1000} height={1500} />
        </div>
      ))}
    </div>
  );
}
