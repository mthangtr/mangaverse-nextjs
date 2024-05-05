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

export default function ViewChapter({
  InitData,
  chapterList,
}: {
  InitData: ChapterDetail;
  chapterList: Chapter[];
}) {
  // href={`/views/${encodeURIComponent(
  //   titleUrlFormat(InitData.mangaTitle)
  // )}/${InitData.mangaId}/${
  //   InitData.chapterId
  // }/${encodeURIComponent(titleUrlFormat(chapter.title))}`}

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
                titleUrlFormat(String(InitData.mangaTitle))
              )}/${InitData.mangaId}`}
              className="px-2 text-sm font-medium truncate max-w-96"
            >
              {InitData.mangaTitle}
            </Link>{" "}
            {" / "}
            <Link
              href={`/views/${encodeURIComponent(
                titleUrlFormat(String(InitData.mangaTitle))
              )}/${InitData.mangaId}/${InitData.chapterId}/${encodeURIComponent(
                titleUrlFormat(String(InitData.chapterTitle))
              )}`}
              className="px-2 text-sm font-medium"
            >
              {InitData.chapterTitle}
            </Link>
          </header>
          <div className="flex item-center pt-2">
            <p>
              {InitData.mangaTitle} - {InitData.chapterTitle} (
              {formatDate(String(InitData.releaseDate))})
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
                defaultValue={InitData.chapterTitle}
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
                  <MenuItem key={chapter.id} value={chapter.title}>
                    {chapter.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="flex justify-center pt-2">
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
              >
                <ArrowBackIos />
              </Button>
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
              >
                <ArrowForwardIos />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ChapterContent chapterId={InitData.chapterId} />
    </div>
  );
}
