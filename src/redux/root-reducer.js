import { combineReducers } from "redux";

import accountReducer from "./account/account.reducer";
import accountListReducer from "./account-list/account-list.reducer";
import userReducer from "./user/user.reducer";
import transactionReducer from "./transaction/transaction.reducer";

export default combineReducers({
  user: userReducer,
  account: accountReducer,
  transactions: transactionReducer,
  accounts: accountListReducer,
});
