import React from "react";

const Bill = ({ bill }) => {
  const { bill_name, bill_website, due_day, amount } = bill;

  function getDay(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;

    return month + "/" + day;
  }

  const formatedDay = getDay(due_day);

  const goToWebPage = () => {
    window.open(bill_website, "_blank");
  };

  return (
    <div className="billDiv">
      <p className="bill">{formatedDay}</p>
      <p className="vendor">{bill_name}</p>
      <p className="bill">{amount}</p>
      <p className="bill paybill" onClick={goToWebPage}>
        Pay
      </p>
      <p className="bill editbill paybill" onClick={() => console.log(due_day)}>
        Edit
      </p>
    </div>
  );
};

export default Bill;
