import { Selector } from './ActionType';

export const searchResultSelector = (state: Selector) => state.search.result;
export const favoriteResultSelector = (state: Selector) => state.search.favoriteResult