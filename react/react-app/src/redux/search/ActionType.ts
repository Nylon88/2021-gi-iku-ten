import { LocationState } from "history"

export type searchPaper = {
  word: string;
  result: Array<searchResult>
}

export type Action = {
  type: string;
  payload: searchPaper;
}

export type searchResult = {
  abstract: string;
  citations: string;
  publisher: string;
  rank: number;
  title: string;
  url: string;
  writer: string;
}

export type Selector = {
  router: LocationState ;
  search: searchPaper;
}

export type Message = {
  title: string,
  status: "info" | "warning" | "success" | "error",
}

export type Scraping = {
  num: number,
  keyword: string,
  year: number
}