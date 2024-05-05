export interface Manga {
  id: number;
  title: string;
  thumbnail?: string;
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
  releaseDate?: Date | string;
  page?: Page[];
}

export interface ChapterDetail {
  chapterId: number;
  mangaId: number;
  chapterTitle: string;
  releaseDate: Date | string;
  page?: Page[];
  mangaTitle: string;
}

export interface Page {
  id: number;
  pageNumber: number;
  imageUrl: string;
}

export interface Window {
  $: JQueryStatic;
  jQuery: JQueryStatic;
}
