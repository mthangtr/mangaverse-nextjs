import React from "react";
import Link from "next/link";
import { Manga } from "@/types/Global.d";
import { Visibility, ThumbUp, Comment } from "@mui/icons-material";
import { formatCount, titleUrlFormat } from "@/utils/format";
import timeAgo from "@/utils/timeAgo";

function MangaCard({ data }: { data: Manga }) {
  return (
    <div className="border max-w-64 rounded-md">
      <div className="flex flex-col">
        <div className="relative">
          <Link
            href={`/detail/${encodeURIComponent(titleUrlFormat(data.title))}/${
              data.id
            }`}
          >
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-64 h-64 object-cover rounded-t-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs p-1 flex justify-between">
              {" "}
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
                <Link
                  href={`/views/${encodeURIComponent(
                    titleUrlFormat(data.title)
                  )}/${data.id}/${chapter.id}/${encodeURIComponent(
                    titleUrlFormat(chapter.title)
                  )}`}
                >
                  <div className="text-xs font-medium hover:underline">
                    {chapter.title}
                  </div>
                </Link>
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
