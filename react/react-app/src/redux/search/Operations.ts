import { Dispatch } from "redux"
import axios from 'axios';
import { searchPaperAction } from "./Action";
import { Message } from "./ActionType";
import { skeleton } from "../boolean/Operations";

type searchPapersProps = {
  word: string,
  period: string | null,
  showMessage: (props: Message) => void
}

export const searchPapers = (props: searchPapersProps) => {
  return async (dispatch: Dispatch<any>) => {
    const { word, period, showMessage } = props;
    dispatch(skeleton());
    await axios.post('http://localhost:8000/v1/search', {word, period})
      .then((result) => {
        dispatch(skeleton());
        dispatch(searchPaperAction({
          word,
          result: result.data
        }))
      }).catch((error) => {
        // 要日本語対応
        showMessage({title: error.message, status: "error"})
      })
  }
}