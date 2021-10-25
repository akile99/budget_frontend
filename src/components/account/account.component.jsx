import React from "react";

import { connect } from "react-redux";

import "./account.styles.scss";

import useBalance from "../../hooks/useBalance.js";
import {
  setCurrentAccount,
  setAccountBalance,
} from "../../redux/account/account.action";

const Account = ({ account, setCurrentAccount, setAccountBalance }) => {
  const { account_id, account_name, account_type } = account;
  const [balance, balanceColor] = useBalance(account_id, "sumCleared");

  return (
    <div
      className="account-block"
      onClick={() => {
        setCurrentAccount(account);
        setAccountBalance(balance);
      }}
    >
      <div className="account-name">
        <p className="account">{account_name}</p>
        <p className="account">{account_type}</p>
      </div>
      <p className={`${balanceColor} balance `}>{balance}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentAccount: (account) => dispatch(setCurrentAccount(account)),
  setAccountBalance: (balance) => dispatch(setAccountBalance(balance)),
});

export default connect(null, mapDispatchToProps)(Account);
