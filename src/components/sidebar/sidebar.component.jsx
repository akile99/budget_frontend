import React, { useState } from "react";
// import UpcomingBills from '../UpcomingBills/UpcomingBills.js';
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
