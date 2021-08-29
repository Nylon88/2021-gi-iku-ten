import { searchPaper, searchResult } from "./ActionType";

type PickPaperProps = {
  pick: number,
  index: number,
  resultData: searchResult[]
}

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

export const PICK_PAPER = "PICK_PAPER";
export const pickPaperAction = (props: PickPaperProps) => {
  const { pick, index, resultData } = props;
  return {
    type: "PICK_PAPER",
    payload: {
      result: [...resultData, resultData[index].pick = pick],
    }
  }
}