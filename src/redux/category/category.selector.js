import { createSelector } from "reselect";

export const selectCategories = (state) => state.categories;

export const selectTransactionList = createSelector(
  [selectCategories],
  (categories) => categories.categoryList
);
