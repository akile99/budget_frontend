import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";

import { UserContainer, UserInfo, UserTable, UserHeading } from "./account-info.styles";
import CurrentTotal from "../current-total/current-total.component";
import CurrentPending from "../current-pending/current-pending.component.jsx";

const AccountInfo = () => {
  const currentUser = useSelector(selectCurrentUser);

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
