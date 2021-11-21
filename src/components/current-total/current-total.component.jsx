import React from "react";
import { useSelector } from "react-redux";

import { selectAccount } from "../../redux/account/account.selector";

const CurrentTotal = () => {
  const total = useSelector(selectAccount);
  return total ? <div>{total}</div> : null;
};

export default CurrentTotal;
