"use client";
import SidebarItem from "./SidebarItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { Manga } from "@/types/mangaTypes";

function Sidebar() {
  const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/manga/service/sidebar/top12/most-viewed")
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          console.error("No data available", res.data);
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold px-4 pt-4">Most Viewed Manga</h1>
      {data.map((manga) => (
        <SidebarItem key={manga.id} data={manga} />
      ))}
    </div>
  );
}

export default Sidebar;
