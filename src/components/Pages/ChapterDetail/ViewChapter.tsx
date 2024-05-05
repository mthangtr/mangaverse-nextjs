"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ChapterDetail, Chapter } from "@/types/Global";
import { formatDate } from "@/utils/format";
import ChapterContent from "./ChapterContent";
import { titleUrlFormat } from "@/utils/format";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

async function getChapterDetail({ chapterId }: { chapterId: number }) {
  const { data } = await axios.get(
    `http://localhost:8080/api/chapter/service/detail/${chapterId}`
  );

  return data;
}

export default function ViewChapter({
  InitData,
  chapterList,
}: {
  InitData: ChapterDetail;
  chapterList: Chapter[];
}) {
  const [data, setData] = useState<ChapterDetail>(InitData);
  const [selectedChapterId, setSelectedChapterId] = useState<number>(
    data.chapterId
  );

  const router = useRouter();

  useEffect(() => {
    if (selectedChapterId !== data.chapterId) {
      getChapterDetail({ chapterId: selectedChapterId })
        .then((newData) => {
          if (newData.chapterId !== data.chapterId) {
            setData(newData);
            router.replace(
              `/views/${encodeURIComponent(
                titleUrlFormat(newData.mangaTitle)
              )}/${newData.mangaId}/${newData.chapterId}/${encodeURIComponent(
                titleUrlFormat(newData.chapterTitle)
              )}`
            );
          }
        })
        .catch((error) => {
          console.error("Failed to fetch chapter details:", error);
        });
    }
  }, [selectedChapterId, data.chapterId, router]);

  const handleChapterChange = (id: number) => {
    setSelectedChapterId(id);
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100">
        <div className="p-2">
          <header className="flex items-center pt-2">
            <Link href={`/`} className="pr-2 text-sm font-medium">
              Home
            </Link>
            {" / "}
            <Link
              href={`/detail/${encodeURIComponent(
                titleUrlFormat(String(data.mangaTitle))
              )}/${data.mangaId}`}
              className="px-2 text-sm font-medium truncate max-w-96"
            >
              {data.mangaTitle}
            </Link>{" "}
            {" / "}
            <Link
              href={`/views/${encodeURIComponent(
                titleUrlFormat(String(data.mangaTitle))
              )}/${data.mangaId}/${data.chapterId}/${encodeURIComponent(
                titleUrlFormat(String(data.chapterTitle))
              )}`}
              className="px-2 text-sm font-medium"
            >
              {data.chapterTitle}
            </Link>
          </header>
          <div className="flex item-center pt-2">
            <p>
              {data.mangaTitle} - {data.chapterTitle} (
              {formatDate(String(data.releaseDate))})
            </p>
          </div>
          <div className="pt-2">
            <a className="text-xs flex justify-center">
              Nếu không xem được truyện vui lòng đổi "SERVER HÌNH" bên dưới
            </a>
            <div className="flex justify-center pt-2">
              <Button variant="contained" size="small" color="success">
                Server 1
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 2
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 3
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 4
              </Button>
            </div>
          </div>
          <div className="bg-slate-200 p-2 mt-2 rounded-md flex justify-center">
            <p> Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</p>
          </div>
          <div className="flex justify-between mt-4">
            <FormControl variant="outlined" className="min-w-40">
              <InputLabel id="chapter-select-label">Chapter</InputLabel>
              <Select
                labelId="chapter-select-label"
                id="chapter-select"
                label="Chapter"
                value={selectedChapterId}
                onChange={(event) =>
                  handleChapterChange(Number(event.target.value))
                }
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                      overflow: "auto",
                    },
                  },
                }}
              >
                {chapterList.map((chapter) => (
                  <MenuItem key={chapter.id} value={chapter.id}>
                    {chapter.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="flex justify-center pt-2">
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
                disabled={
                  data.chapterId === chapterList[chapterList.length - 1].id
                }
                onClick={() => handleChapterChange(data.chapterId - 1)}
              >
                <ArrowBackIos />
              </Button>
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
                disabled={data.chapterId === chapterList[0].id}
                onClick={() => handleChapterChange(data.chapterId + 1)}
              >
                <ArrowForwardIos />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ChapterContent chapterId={data.chapterId} />
    </div>
  );
}
