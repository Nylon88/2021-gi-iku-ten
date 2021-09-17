import { LocationState } from "history"
import { favoriteData } from "../../components/organisms/search/favoriteData"

export type searchPaper = {
  word: string;
  result: Array<searchResult>
  favoriteResult?: Array<favoriteData>
}

export type SearchFavoritePaper = {
  favoriteResult: Array<SendPickData>
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