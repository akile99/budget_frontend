import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { globalVars } from "../../hooks/global.js";

import { setAccounts } from "../../redux/account/account.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import { UserContainer, UserInfo } from "./account-info.styles";
import CurrentTotal from "../current-total/current-total.component";

const AccountInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentAccount = useSelector(selectCurrentAccount);
  const dispatch = useDispatch();

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
  }, [currentUser.user_id, dispatch]);

  return (
    <UserContainer>
      {currentAccount ? (
        <UserInfo>
          <CurrentTotal />
        </UserInfo>
      ) : null}
      <UserInfo>{currentUser.firstname}</UserInfo>
    </UserContainer>
  );
};

export default AccountInfo;
