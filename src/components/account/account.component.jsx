import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./account.styles.scss";

import { selectCurrentAccount } from "../../redux/account/account.selector";

import useBalance from "../../hooks/useBalance.js";
import {
  setCurrentAccount,
  setAccountBalance,
} from "../../redux/account/account.action";

const Account = ({ account }) => {
  const { account_id, account_name, account_type } = account;
  const dispatch = useDispatch();
  const [balance, balanceColor] = useBalance(account_id, "sumCleared");
  const currentAccount = useSelector(selectCurrentAccount);

  useEffect(() => {
    dispatch(setAccountBalance(balance));
  }, [balance, dispatch]);

  return (
    <div
      className="account-block"
      onClick={() => {
        dispatch(setCurrentAccount(account));
      }}
    >
      <div className="account-name">
        <p className="account">{account_name}</p>
        <p className="account">{account_type}</p>
      </div>
      <p className={`${balanceColor} balance `}>{currentAccount.balance}</p>
    </div>
  );
};

export default Account;
