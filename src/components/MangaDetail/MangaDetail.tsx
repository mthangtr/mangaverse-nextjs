"use client";
import { Manga } from "@/types/Global";
import {
  Visibility,
  ThumbUp,
  FavoriteBorder,
  ExpandLess,
  ExpandMore,
  Info,
  MenuBook,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

function MangaDetail({ data }: { data: Manga }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const formatCount = (count?: number) => {
    if (!count) return "0";
    if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(0)}k`;
    return count.toString();
  };

  function timeAgo(releaseDate: any) {
    const currentDate = new Date();
    const releaseDateObj = new Date(releaseDate);
    const timeDiff = currentDate.getTime() - releaseDateObj.getTime();

    const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysAgo = Math.floor(hoursAgo / 24);

    if (hoursAgo < 24) {
      return `${hoursAgo} hours ago`;
    } else if (daysAgo < 7) {
      return `${daysAgo} days ago`;
    } else if (daysAgo < 30) {
      return `${daysAgo} days ago`;
    } else if (daysAgo < 365) {
      return `${Math.floor(daysAgo / 30)} months ago`;
    } else {
      return `${Math.floor(daysAgo / 365)} years ago`;
    }
  }

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

  return (
    <div className="my-4 max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
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
              <Button variant="outlined">Read first</Button>
              <Button className="ml-4" variant="outlined">
                Read Latest
              </Button>
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
          {data.chapters?.map((chapter) => (
            <div className="flex justify-between hover:bg-slate-100 rounded-md p-2">
              <h1 className="text-md">{chapter.title}</h1>
              <p className="text-sm text-gray-600">
                {timeAgo(chapter.releaseDate)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MangaDetail;
