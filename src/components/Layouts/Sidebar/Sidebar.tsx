import SidebarItem from "./SidebarItem";
import axios from "axios";
import { Manga } from "@/types/Global";

const SidebarData = async () => {
  const res = await axios.get<Manga[]>(
    "http://localhost:8080/api/manga/service/sidebar/top12/most-viewed"
  );
  return res.data;
};

export default async function Sidebar() {
  const data = await SidebarData();

  return (
    <div>
      <h1 className="text-lg font-bold px-4 pt-4">Most Viewed Manga</h1>
      {data.map((manga) => (
        <SidebarItem key={manga.id} data={manga} />
      ))}
    </div>
  );
}
