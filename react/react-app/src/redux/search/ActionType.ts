export type searchPaper = {
  word: string;
  result: Array<string>
}

export type Action = {
  type: string;
  payload: searchPaper;
}