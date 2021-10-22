import React from "react";
import AccountBalance from "../AccountBalance/account_balance.component";

import "./account.styles.scss";

import useBalance from "../../hooks/useBalance.js";

const Account = ({ account }) => {
  const { account_name, account_type, openningbalance } = account;
  return (
    <div id="Accounts">
      <p className="Account">{account_name}</p>
      <p className="Account">{account_type}</p>
      <p className="Account">{openningbalance}</p>
    </div>
  );
};

export default Account;
