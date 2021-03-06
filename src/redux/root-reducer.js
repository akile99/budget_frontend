import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import accountReducer from "./account/account.reducer";
import userReducer from "./user/user.reducer";
import transactionReducer from "./transaction/transaction.reducer";
import categoryReducer from "./category/category.reducer";
import billReducer from "./bills/bills.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "transactions", "accounts", "categories"],
};

const appReducer = combineReducers({
  user: userReducer,
  transactions: transactionReducer,
  accounts: accountReducer,
  categories: categoryReducer,
  bills: billReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
