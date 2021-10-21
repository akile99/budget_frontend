import React from "react";
import AccountBalance from "../AccountBalance/AccountBalance.js";
import "./Account.css";
import useBalance from "../../hooks/useBalance.js";

const Card = (props) => {
  const { account_id, account_name, account_type } = props;
  const [balance, balanceColor] = useBalance(
    account_id,
    "sumCleared",
    props.submit
  );

  const handelLoadAccount = () => {
    props.onChange(account_id);
  };

  return (
    <div id="Accounts" onClick={() => handelLoadAccount()}>
      <p className="Account">{account_name + " " + account_type}</p>
      <p className={`${balanceColor} Account`}>{balance}</p>
    </div>
  );
};

export default Card;
