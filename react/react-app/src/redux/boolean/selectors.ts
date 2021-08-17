import { createSelector } from "reselect";

const booleanSelector = (boolean: boolean) => boolean;

export const getSkeleton = createSelector(
  [booleanSelector],
  (boolean: boolean) => boolean
)