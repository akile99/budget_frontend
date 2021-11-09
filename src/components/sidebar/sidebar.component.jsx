import React from "react";

import AccountList from "../account-list/account-list.component";
import AccountPage from "../../pages/account-page/account-page.component";

import "./sidebar.styles.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <AccountPage />
    </div>
  );
};

export default SideBar;
