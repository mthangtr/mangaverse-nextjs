import React from "react";
import Link from "next/link";
import { Manga } from "@/types/mangaTypes";
import { Visibility, ThumbUp, Comment } from "@mui/icons-material";

interface Props {
  data: Manga;
}

function MangaCard({ data }: Props) {
  const formatCount = (count?: number) => {
    if (!count) return "0";
    if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(0)}k`;
    return count.toString();
  };

  return (
    <div className="border max-w-64 rounded-md">
      <div className="flex flex-col">
        <div className="relative">
          <Link href={`/detail/${data.id}`}>
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-64 h-64 object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs p-1 flex justify-between">
              {" "}
              {/* Overlay div */}
              <span className="flex justify-center items-center">
                <Visibility className="text-xs mr-1" />{" "}
                {formatCount(data.viewCount)}
              </span>
              <span className="flex justify-center items-center">
                <Comment className="text-xs mr-1" />{" "}
                {formatCount(data.followerCount)}
              </span>
              <span className="flex justify-center items-center">
                <ThumbUp className="text-xs mr-1" />{" "}
                {formatCount(data.likeCount)}
              </span>
            </div>
          </Link>
        </div>
        <div className="p-2">
          <h2 className="text-md font-bold truncate hover:text-blue-500">
            {data.title}
          </h2>
          <div className="flex flex-col">
            {data.chapters?.map((chapter) => (
              <div key={chapter.id} className="flex justify-between">
                <div className="text-xs font-medium">{chapter.title}</div>
                <span className="text-xs font-medium text-gray-600">
                  7 hours ago
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaCard;
