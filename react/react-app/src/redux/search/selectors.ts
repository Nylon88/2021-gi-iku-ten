import { Selector } from './ActionType';

export const searchResultSelector = (state: Selector) => state.search.result;
export const favoritePicksSelector = (state: Selector) => state.search.favoritePicks;
export const favoriteResultSelector = (state: Selector) => state.search.favoriteResult;
export const recentPicksSelector = (state: Selector) => state.search.recentPicks;
export const recentResultSelector = (state: Selector) => state.search.recentResult;