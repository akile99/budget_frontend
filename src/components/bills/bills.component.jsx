import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Bill from "../bill/bill.component";

import { selectBillList } from "../../redux/bills/bills.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setBills } from "../../redux/bills/bills.actions";

import "./bills.styles.scss";

const Bills = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const bills = useSelector(selectBillList);

  useEffect(() => {
    fetch(`https://star-ship-enterprise.herokuapp.com/upcomingBills`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setBills(data));
      });
  }, [dispatch, currentUser]);

  return (
    <div>
      <div className="heading">
        <p className="bill Title">Due Day</p>
        <p className="vendor Title">Vender</p>
        <p className="bill Title">Amount</p>
        <p className="bill Title">Pay</p>
        <p className="bill Title editbill">Edit</p>
      </div>
      {bills.map((bill) => {
        return <Bill key={bill.bill_id} bill={bill} />;
      })}
    </div>
  );
};

export default Bills;
