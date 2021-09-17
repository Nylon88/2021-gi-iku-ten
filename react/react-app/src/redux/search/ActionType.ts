import { LocationState } from "history"

export type searchPaper = {
  word: string;
  result: Array<searchResult>
  favoriteResult?: Array<favoriteData>
}

export type SearchFavoritePaper = {
  recentResult: Array<favoriteData>
  recentPicks: Array<Number>
  favoriteResult: Array<favoriteData>
  favoritePicks: Array<Number>
}

export type Action = {
  type: string;
  payload: searchPaper;
}

export type searchResult = {
  abstract: string;
  citations: number;
  pick: number
  publisher: string;
  rank: number;
  title: string;
  url: string;
  writer: string;
  year: string;
  coefficient: number;
  point: number;
}

export type Selector = {
  router: LocationState ;
  search: searchPaper;
}

export type Message = {
  title: string,
  status: "info" | "warning" | "success" | "error",
}

export type SendPickData = {
  abstract: string;
  citations: number;
  publisher: string;
  title: string;
  url: string;
  writer: string;
  year: string;
}

export type favoriteData = {
  id: number
  url: string
  created_at: string
  updated_at: string
  title: string
  abstract: string
  writer: string
  year: string
  publisher: string
  citations: string
}
