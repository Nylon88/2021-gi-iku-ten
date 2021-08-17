import { Dispatch } from "redux"
import axios from 'axios';
import { searchPaperAction } from "./Action";
import { Message } from "./ActionType";
import { skeleton } from "../boolean/Operations";

type Props = {
  word: string,
  showMessage: (props: Message) => void
}

export const searchPapers = (props: Props) => {
  return async (dispatch: Dispatch<any>) => {
    const { word, showMessage } = props;
    dispatch(skeleton());
    await axios.post('http://localhost:8000/v1/search', {word})
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