export interface Manga {
  id: number;
  title: string;
  thumbnail: string;
  author?: string;
  followerCount?: number;
  likeCount?: number;
  viewCount?: number;
  description?: string;
  releaseDate?: Date | string;
  categories?: string[];
  chapters?: Chapter[];
}

export interface Chapter {
  id: number;
  title: string;
  releaseDate: Date | string;
}

export interface Window {
  $: JQueryStatic;
  jQuery: JQueryStatic;
}
