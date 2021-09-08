import { Dispatch } from "redux"
import axios from 'axios';
import { pickPaperAction, searchPaperAction } from "./Action";
import { Message, searchResult } from "./ActionType";
import { skeleton } from "../boolean/Operations";
import { API_ENDPOINT } from "../../template/apiEndpoint";

type searchPapersProps = {
  word: string,
  period: string | null,
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
      }).catch((error) => {
        // 要日本語対応
        showMessage({title: error.message, status: "error"})
      }).finally(() => dispatch(skeleton()))
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