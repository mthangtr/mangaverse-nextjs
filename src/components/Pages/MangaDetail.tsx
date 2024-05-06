"use client";
import { Manga, Chapter } from "@/types/Global";
import axios from "axios";
import {
  Visibility,
  ThumbUp,
  FavoriteBorder,
  ExpandLess,
  ExpandMore,
  Info,
  MenuBook,
} from "@mui/icons-material";
import Link from "next/link";
import { formatCount, titleUrlFormat } from "@/utils/format";
import timeAgo from "@/utils/timeAgo";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

async function getFirstChapter(mangaId: number) {
  const { data } = await axios.get<Chapter>(
    `http://localhost:8080/api/chapter/service/first-chapter/${mangaId}`
  );

  return data;
}

export default function MangaDetail({
  data,
  chaptersInit,
  totalChapter,
}: {
  data: Manga;
  chaptersInit: Chapter[];
  totalChapter: number;
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>([...chaptersInit]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstChapter, setFirstChapter] = useState<Chapter | null>(null);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (!data.description) return "Follow manga to get updates.";
    if (data.description.length < 300) return data.description;
    if (showFullDescription) {
      return (
        <>
          {data.description}
          <Button onClick={toggleDescription} size="small" color="secondary">
            <ExpandLess /> Show less
          </Button>
        </>
      );
    } else {
      return (
        <>
          {data.description?.slice(0, 300) + "..."}
          <Button onClick={toggleDescription} size="small" color="secondary">
            <ExpandMore /> Show more
          </Button>
        </>
      );
    }
  };

  const fetchChapters = async (mangaId: number, page: number) => {
    if (page === 1) return;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/chapter/service/detail/${mangaId}/chapters?page=${page}`
      );
      setChapters((prevChapters) => [...prevChapters, ...response.data]);
    } catch (error) {
      console.error("Failed to fetch chapters:", error);
    }
  };

  useEffect(() => {
    fetchChapters(data.id, currentPage);
    getFirstChapter(data.id)
      .then((firstChapterData) => {
        setFirstChapter(firstChapterData);
      })
      .catch((error) => {
        console.error("Failed to fetch first chapter:", error);
      });
  }, [currentPage]);

  const handleShowMore = () => {
    if (chapters.length >= totalChapter) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="my-4 max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-row">
        <div className="flex-none w-72 h-96 rounded-lg overflow-hidden">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow ml-6 mt-4 md:mt-0 text-left flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
            <p className="text-sm text-gray-600">{timeAgo(data.releaseDate)}</p>
            <p className="text-sm text-gray-600 mt-1">Author: {data.author}</p>
            <div className="items-center mt-2 gap-4">
              <div className="flex mt-2 items-center text-gray-600">
                <Visibility className="text-blue-500 mr-1" />
                {formatCount(data.viewCount)} views
              </div>
              <div className="flex mt-2 items-center text-gray-600">
                <ThumbUp className="text-green-500 mr-1" />
                {formatCount(data.likeCount)} likes
              </div>
              <div className="flex mt-2 items-center text-gray-600">
                <FavoriteBorder className="text-red-500 mr-1" />
                {formatCount(data.followerCount)} followers
              </div>
            </div>
            <div className="mt-3">
              <span className="font-semibold">Categories: </span>
              {data.categories?.join(" - ") || "No categories"}
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div>
              <Button variant="outlined" color="error">
                <FavoriteBorder />
              </Button>
              <Button className="ml-4" variant="outlined" color="success">
                <ThumbUp />
              </Button>
            </div>
            <div>
              <Link
                href={
                  firstChapter
                    ? `/views/${encodeURIComponent(
                        titleUrlFormat(data.title)
                      )}/${data.id}/${firstChapter.id}/${encodeURIComponent(
                        titleUrlFormat(firstChapter.title)
                      )}`
                    : "#"
                }
              >
                <Button variant="outlined">Read first</Button>
              </Link>
              <Link
                href={`/views/${encodeURIComponent(
                  titleUrlFormat(data.title)
                )}/${data.id}/${chapters[0].id}/${encodeURIComponent(
                  titleUrlFormat(chapters[0].title)
                )}`}
              >
                <Button className="ml-4" variant="outlined">
                  Read Latest
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-2 font-semibold">
          <div className="flex mt-2 items-center">
            <Info className="mr-1 text-md" />
            <span className="text-lg font-semibold">Description:</span>
          </div>
          <div className="border-b-2 mb-1"></div>
          <p className="font-normal">{renderDescription()}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex mt-2 items-center">
          <MenuBook className="mr-1 text-md" />
          <span className="text-lg font-semibold">Chapters:</span>
        </div>
        <div className="border-b-2"></div>
        <div>
          {chapters &&
            chapters.map((chapter) => (
              <Link
                href={`/views/${encodeURIComponent(
                  titleUrlFormat(data.title)
                )}/${data.id}/${chapter.id}/${encodeURIComponent(
                  titleUrlFormat(chapter.title)
                )}`}
              >
                <div
                  key={chapter.id}
                  className="flex justify-between hover:bg-slate-100 rounded-md p-2"
                >
                  <h1 className="text-md">{chapter.title}</h1>
                  <p className="text-sm text-gray-600">
                    {timeAgo(chapter.releaseDate)}
                  </p>
                </div>
              </Link>
            ))}
          {chapters.length < totalChapter && (
            <Button onClick={handleShowMore} color="primary">
              Show More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
