import { Dispatch } from "redux"
import { searchPaper } from "./ActionType"
import axios from 'axios';

export const searchPapers = (props: Omit<searchPaper, "result">) => {
  return async (dispatch: Dispatch<any>) => {
    const { word } = props;
    await axios.post('http://localhost:8000/v1/search', {word})
      .then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
  }
}