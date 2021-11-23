import React from "react";

import AccountList from "../../components/account-list/account-list.component.jsx";

const AccountPage = () => (
  <div>
    <div className="flex justify-center">
      <h2 className="Account">Accounts </h2>
    </div>
    <AccountList />
  </div>
);

export default AccountPage;
