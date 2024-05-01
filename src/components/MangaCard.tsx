import React from "react";
import Link from "next/link";
import { Manga } from "@/types/Global.d";
import { Visibility, ThumbUp, Comment } from "@mui/icons-material";

function MangaCard({ data }: { data: Manga }) {
  const formatCount = (count?: number) => {
    if (!count) return "0";
    if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(0)}k`;
    return count.toString();
  };

  const titleUrlFormat = data.title
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase();

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

  return (
    <div className="border max-w-64 rounded-md">
      <div className="flex flex-col">
        <div className="relative">
          <Link
            href={`/detail/${encodeURIComponent(titleUrlFormat)}/${data.id}`}
          >
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
          <Link href={`/detail/${data.title}/${data.id}`}>
            <h2 className="text-md font-bold truncate">{data.title}</h2>
          </Link>
          <div className="flex flex-col">
            {data.chapters?.slice(0, 3).map((chapter) => (
              <div key={chapter.id} className="flex justify-between">
                <div className="text-xs font-medium">{chapter.title}</div>
                <span className="text-xs font-medium text-gray-600">
                  {timeAgo(chapter.releaseDate)}
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
