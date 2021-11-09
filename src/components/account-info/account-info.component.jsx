import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentAccount } from "../../redux/account/account.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { UserContainer, UserInfo } from "./account-info.styles";

const AccountInfo = () => {
  const currentAccount = useSelector(selectCurrentAccount);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <UserContainer>
      {currentAccount ? <UserInfo>{currentAccount.total}</UserInfo> : null}
      <UserInfo>{currentUser.firstname}</UserInfo>
    </UserContainer>
  );
};

export default AccountInfo;
