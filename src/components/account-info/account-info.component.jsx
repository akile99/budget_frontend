import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCurrentAccount } from "../../redux/account/account.selector";

import { UserContainer, UserInfo } from "./account-info.styles";
import CurrentTotal from "../current-total/current-total.component";

const AccountInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentAccount = useSelector(selectCurrentAccount);

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
