import React from "react";

import useBalance from "../../hooks/useBalance.js";

import "./AccountBalance.css";

const AccountPending = (props) => {
  const address = "sumPending";
  const [pendingBalance, pendingColor] = useBalance(
    props.account_id,
    address,
    props.submit
  );

  return <p className={pendingColor}>{`$ ${pendingBalance}`} </p>;
};

export default AccountPending;
