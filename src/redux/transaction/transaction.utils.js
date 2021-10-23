import { globalVars } from "../../hooks/global";

export const loadTransactions = (transactionList, account) => {
  // console.log(`trans ${transactionList}id: ${account.account_id}`);
  const d = new Date();
  d.setDate(d.getDate() - 60);
  const from_date = d.toISOString().split("T")[0];
  const to_date = new Date().toISOString().split("T")[0];
  // const [transactions, setTransactions] = useState([]);

  try {
    fetch(`${globalVars.HOST}transactions`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account_id: account.account_id,
        from_date: from_date,
        to_date: to_date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        transactionList.push(...data);
      });
  } catch (e) {
    console.log(e);
  }

  return transactionList;
};
