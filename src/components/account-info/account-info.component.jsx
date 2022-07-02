import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { globalVars } from "../../hooks/global.js";

import { setAccounts } from "../../redux/account/account.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import { UserContainer, UserInfo, UserTable, UserHeading } from "./account-info.styles";
import CurrentTotal from "../current-total/current-total.component";
import CurrentPending from "../current-pending/current-pending.component.jsx";

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
    <UserTable>
        <UserContainer>
            <UserHeading>Total</UserHeading>
            <UserHeading>Pending</UserHeading>
          <UserHeading>Name</UserHeading>
        </UserContainer>
      <UserContainer>
            <UserInfo><CurrentTotal /></UserInfo>
            <UserInfo><CurrentPending /></UserInfo>
        <UserInfo>{currentUser.firstname}</UserInfo>
      </UserContainer>
    </UserTable>
  );
};

export default AccountInfo;
