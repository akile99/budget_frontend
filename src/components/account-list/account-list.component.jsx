import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { globalVars } from "../../hooks/global.js";

import { setAccounts } from "../../redux/account/account.action";

import { selectAccountList } from "../../redux/account/account.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import Account from "../account/account.component";

import "./account-list.styles.scss";

const AccountList = () => {
  const accountList = useSelector(selectAccountList);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(`${globalVars.HOST}accounts`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAccounts(data));
      });
  }, [currentUser.user_id, dispatch, refresh]);

  return (
    <div>
      <p onClick={()=>{
        setRefresh(!refresh);
      }}>Refresh</p>
      {accountList.map((account) => (
        <Account key={account.account_id} account={account} />
      ))}
    </div>
  );
};

export default AccountList;
