import React from "react";

import { connect } from "react-redux";

import "./account.styles.scss";

import useBalance from "../../hooks/useBalance.js";
import { setAccount } from "../../redux/account/account.action";

const Account = ({ account, setAccount }) => {
  const { account_id, account_name, account_type } = account;
  const [balance, balanceColor] = useBalance(account_id, "sumCleared");
  return (
    <div className="account-block" onClick={() => setAccount(account)}>
      <div className="account-name">
        <p className="account">{account_name}</p>
        <p className="account">{account_type}</p>
      </div>
      <p className={`${balanceColor} balance `}>{balance}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAccount: (account) => dispatch(setAccount(account)),
});

export default connect(null, mapDispatchToProps)(Account);
