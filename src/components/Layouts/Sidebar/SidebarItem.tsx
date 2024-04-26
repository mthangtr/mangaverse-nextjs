import { Visibility } from "@mui/icons-material";
import { Manga } from "@/types/mangaTypes";

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

  return (
    <div className="flex space-x-3 p-2 m-2">
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-16 h-20 object-cover rounded-md"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-sm font-semibold truncate w-40">{data.title}</h2>
        <a className="text-xs ">
          <Visibility className="text-xs mr-1" />{" "}
          {formatViewCount(data.viewCount)}
        </a>
        <ul className="text-xs">
          {data.chapters?.slice(0, 3).map((chapter) => (
            <div key={chapter.id} className="flex justify-between">
              <li>{chapter.title}</li>
              <span>7 hours ago</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SidebarItem;
