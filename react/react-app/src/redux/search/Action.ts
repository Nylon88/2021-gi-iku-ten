import { searchPaper } from "./ActionType";

export const SEARCH_PAPER = "SEARCH_PAPER";
export const searchPaperAction = (searchState: searchPaper) => {
  return {
    type: "SEARCH_PAPER",
    payload: {
      word: searchState.word,
      result: searchState.result
    }
  }
};
