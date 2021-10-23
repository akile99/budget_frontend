import React from "react";
import { connect } from "react-redux";

import "./account.styles.scss";

import { setTransactions } from "../../redux/transaction/transaction.action";
import useBalance from "../../hooks/useBalance.js";

const Account = ({ account, setTransactions }) => {
  const { account_id, account_name, account_type } = account;
  const [balance, balanceColor] = useBalance(account_id, "sumCleared");
  return (
    <div className="account-block" onClick={() => setTransactions(account)}>
      <div className="account-name">
        <p className="account">{account_name}</p>
        <p className="account">{account_type}</p>
      </div>
      <p className={`${balanceColor} balance `}>{balance}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTransactions: (account) => dispatch(setTransactions(account)),
});

export default connect(null, mapDispatchToProps)(Account);
