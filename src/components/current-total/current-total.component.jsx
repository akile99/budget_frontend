import React from "react";
import { useSelector } from "react-redux";

import { selectAccountTotal } from "../../redux/account/account.selector";

const CurrentTotal = () => {
  const total = useSelector(selectAccountTotal);
  return total ? <div>{total}</div> : null;
};

export default CurrentTotal;
