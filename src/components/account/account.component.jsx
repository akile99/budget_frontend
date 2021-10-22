import React from "react";

import "./account.styles.scss";

import useBalance from "../../hooks/useBalance.js";

const Account = ({ account }) => {
  const { account_id, account_name, account_type } = account;
  const [balance, balanceColor] = useBalance(account_id, "sumCleared");
  return (
    <div className="account-block">
      <div className="account-name">
        <p className="account">{account_name}</p>
        <p className="account">{account_type}</p>
      </div>
      <p className={`${balanceColor} balance `}>{balance}</p>
    </div>
  );
};

export default Account;
