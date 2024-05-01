import { Visibility } from "@mui/icons-material";
import { Manga } from "@/types/Global.d";
import Link from "next/link";

interface SidebarItemProps {
  data: Manga;
}

function SidebarItem({ data }: SidebarItemProps) {
  const formatViewCount = (count?: number) => {
    if (!count) return "0";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  function timeAgo(releaseDate: Date | string) {
    const currentDate = new Date();
    const releaseDateObj = new Date(releaseDate);
    const timeDiff = currentDate.getTime() - releaseDateObj.getTime();

    const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysAgo = Math.floor(hoursAgo / 24);

    if (hoursAgo < 24) {
      return `${hoursAgo} hours ago`;
    } else if (daysAgo < 7) {
      return `${daysAgo} days ago`;
    } else {
      return `${daysAgo} days ago`;
    }
  }

  const titleUrlFormat = data.title
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase();

  return (
    <div className="flex space-x-3 p-2 m-2">
      <Link href={`/detail/${encodeURIComponent(titleUrlFormat)}/${data.id}`}>
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-16 h-20 object-cover rounded-md"
        />
      </Link>
      <div className="flex flex-col justify-center">
        <Link href={`/detail/${encodeURIComponent(titleUrlFormat)}/${data.id}`}>
          <h2 className="text-sm font-semibold truncate w-40">{data.title}</h2>
        </Link>
        <a className="text-xs ">
          <Visibility className="text-xs mr-1" />{" "}
          {formatViewCount(data.viewCount)}
        </a>
        <ul className="text-xs">
          {data.chapters?.slice(0, 3).map((chapter) => (
            <div key={chapter.id} className="flex justify-between">
              <li>{chapter.title}</li>
              <span>{timeAgo(chapter.releaseDate)}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SidebarItem;
