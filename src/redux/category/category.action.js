import CategoryActionTypes from "./category.types";

export const setCategories = (categories) => ({
  type: CategoryActionTypes.SET_CATEGORIES,
  payload: categories,
});
