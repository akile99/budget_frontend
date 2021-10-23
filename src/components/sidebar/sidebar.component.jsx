import React from "react";

import AccountList from "../account-list/account-list.component";

import "./sidebar.styles.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <AccountList />
    </div>
  );
};

export default SideBar;
