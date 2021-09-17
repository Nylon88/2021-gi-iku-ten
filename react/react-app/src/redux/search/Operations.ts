import { Dispatch } from "redux"
import axios from 'axios';
import { pickPaperAction, searchFavoritePaperAction, searchPaperAction } from "./Action";
import { Message, SearchFavoritePaper, searchResult, SendPickData } from "./ActionType";
import { skeleton } from "../boolean/Operations";
import { API_ENDPOINT } from "../../template/apiEndpoint";

type searchPapersProps = {
  word: string,
  period: string | null,
  showMessage: (props: Message) => void
}

type searchFavoritePapersProps = {
  showMessage: (props: Message) => void
}

type pickPaperProps = {
  result: [number, string],
  index: number,
  resultData: searchResult[]
  showMessage: (props: Message) => void
}

export const searchPapers = (props: searchPapersProps) => {
  return async (dispatch: Dispatch<any>) => {
    const { word, period, showMessage } = props;
    dispatch(skeleton());
    await axios.post(`${API_ENDPOINT}/search`, {word, period})
    .then((result) => {
      dispatch(searchPaperAction({
        word,
        result: result.data
      }))
    })
    .catch((error) => {
      // 要日本語対応
      showMessage({title: error.message, status: "error"})
    })
    .finally(() => dispatch(skeleton()))
  }
}

export const pickPaper = (props: pickPaperProps) => {
  return (dispatch: Dispatch<any>) => {
    const { result, index, resultData, showMessage } = props;
    const [pick, title] = result;
    const status = title === "正常にPickできました" ? "success" : "error";
    dispatch(pickPaperAction({pick, index, resultData}));
    showMessage({title, status});
  }
}

export const searchFavoritePapers = (props: searchFavoritePapersProps) => {
  return async (dispatch: Dispatch<any>) => {
    const { showMessage } = props;
    dispatch(skeleton());
    await axios.get(`${API_ENDPOINT}/search`)
    .then((result) => {
      dispatch(searchFavoritePaperAction({
        recentResult: result.data.recent,
        recentPicks: result.data.recent_pick,
        favoriteResult: result.data.favorite,
        favoritePicks: result.data.favorite_picks
      }))
    })
    .catch((error) => {
      showMessage({title: error.message, status: "error"})
    })
    .finally(() => dispatch(skeleton()))
  }
}