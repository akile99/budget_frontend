import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
  categoryList: [],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
