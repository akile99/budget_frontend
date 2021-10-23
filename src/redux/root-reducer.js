import { combineReducers } from "redux";

import accountReducer from "./account/account.reducer";
import userReducer from "./user/user.reducer";
import transactionReducer from "./transaction/transaction.reducer";

export default combineReducers({
  user: userReducer,
  accounts: accountReducer,
  transactions: transactionReducer,
});
