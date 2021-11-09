import React from "react";

import { useDispatch } from "react-redux";

import "./account.styles.scss";

import { setCurrentAccount } from "../../redux/account/account.action";

const Account = ({ account }) => {
  const { account_name, account_type, total } = account;
  const dispatch = useDispatch();

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
      <p className={total < 0 ? "red" : "black"}>
        {total ? `$ ${total}` : "$ 0.00"}
      </p>
    </div>
  );
};

export default Account;
