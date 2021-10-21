import React from "react";

import useBalance from "../../hooks/useBalance.js";

import "./AccountBalance.css";

const AccountBalance = (props) => {
  const address = "sumCleared";
  const [balance, balanceColor] = useBalance(
    props.account_id,
    address,
    props.submit
  );
  return <p className={balanceColor}>{`$ ${balance}`} </p>;
};

export default AccountBalance;
