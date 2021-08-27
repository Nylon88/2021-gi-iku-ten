import { Dispatch } from "redux"
import axios from 'axios';
import { searchPaperAction } from "./Action";
import { Message } from "./ActionType";
import { skeleton } from "../boolean/Operations";
import { PaperInfoList, useScraping } from "../../hooks/useScraping";

type Props = {
  word: string,
  period: string | null,
  showMessage: (props: Message) => void
}

export const searchPapers = (props: Props) => {
  return async (dispatch: Dispatch<any>) => {
    const { word, period, showMessage } = props;
    dispatch(skeleton());
    // await axios.post('http://localhost:8000/v1/search', {word, period})
    //   .then((result) => {
    const searchCondition = {
      num: 3, keyword: "ブロックチェーン", year: 2021
    }
    const { scraping } = useScraping();
    const result = scraping(searchCondition)
    console.log(result)
        // dispatch(skeleton());
        // dispatch(searchPaperAction({
        //   word,
        //   result: result.data
        // }))
      // }).catch((error) => {
      //   // 要日本語対応
      //   showMessage({title: error.message, status: "error"})
      // })
  }
}