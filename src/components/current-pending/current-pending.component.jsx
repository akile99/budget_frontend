import React from "react";
import { useSelector } from "react-redux";

import { selectAccountPending } from "../../redux/account/account.selector";

const CurrentPending = () => {
  const pending = useSelector(selectAccountPending);
  return pending ? <div>{pending}</div> : null;
};

export default CurrentPending;
