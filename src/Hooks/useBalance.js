import { useState, useEffect } from "react";

import { globalVars } from "./global";

export default function useBalance(account_id, address) {
  const [total, setTotal] = useState();
  const [color, setColor] = useState("black");
  useEffect(() => {
    if (account_id) {
      try {
        fetch(`${globalVars.HOST}${address}`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            account_id: account_id,
          }),
        })
          .then((response) => response.json())
          .then((data) => setTotal(data[0].sum));
      } catch (error) {
        console.error(error);
      }
      if (total < 0) {
        setColor("red");
      } else {
        setColor("black");
      }
    }
  }, [account_id, total, address]);

  return [total, color];
}
