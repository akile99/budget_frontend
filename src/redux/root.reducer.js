import { combineReducers } from "redux";

import accountReducer from "./account/account.reducer";
import accountListReducer from "./account-list/account-list.reducer";
import userReducer from "./user/user.reducer";
import transactionReducer from "./transaction/transaction.reducer";

const appReducer = combineReducers({
  user: userReducer,
  account: accountReducer,
  transactions: transactionReducer,
  accounts: accountListReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
