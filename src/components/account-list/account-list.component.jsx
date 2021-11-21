import React from "react";
import { useSelector } from "react-redux";

import { selectAccountList } from "../../redux/account/account.selector";

import Account from "../account/account.component";

import "./account-list.styles.scss";

const AccountList = () => {
  const accountList = useSelector(selectAccountList);

  return (
    <div>
      {accountList.map((account) => (
        <Account key={account.account_id} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
