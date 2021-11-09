export const getAccountBalance = (accountList, accountBalance) => {
  console.log(
    `balance = ${accountBalance} account id = ${accountList.account_id}`
  );
  return [...accountList, { balance: accountBalance }];
};

export const updateAccountBalance = (currentAccount, newBalance) => {
  console.log(`account total: ${currentAccount.total} payload: ${newBalance} `);
  return {
    ...currentAccount,
    total: (parseFloat(currentAccount.total) + parseFloat(newBalance)).toFixed(
      2
    ),
  };
};

export const updateAccountTotal = (accountList, account, balance) => {
  console.log(`account total: ${account.total} payload: ${balance} `);
  accountList.find((account) => account.account_id === accountList.account_id);
  return {
    ...account,
    total: (parseFloat(account.total) + parseFloat(balance)).toFixed(2),
  };
};
