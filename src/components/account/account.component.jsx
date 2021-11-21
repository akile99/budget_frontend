import React from "react";

import { useDispatch } from "react-redux";

import { AccountContainer, AccountName, Name, Total } from "./account.styles";

import { setCurrentAccount } from "../../redux/account/account.action";

const Account = ({ account }) => {
  const { account_id, account_name, account_type, total } = account;
  const dispatch = useDispatch();

  return (
    <AccountContainer
      onClick={() => {
        dispatch(setCurrentAccount(account_id));
      }}
    >
      <AccountName>
        <Name>{account_name}</Name>
        <Name>{account_type}</Name>
      </AccountName>
      <Total>{total ? `$ ${total}` : "$ 0.00"}</Total>
    </AccountContainer>
  );
};

export default Account;
