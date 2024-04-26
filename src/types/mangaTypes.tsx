import { Category } from "./categoryTypes";
import { Chapter } from "./chapterTypes";

export interface Manga {
  id: number;
  title: string;
  thumbnail: string;
  author?: string;
  followerCount?: number;
  likeCount?: number;
  viewCount?: number;
  description?: string;
  categories?: Category[];
  chapters?: Chapter[];
}
