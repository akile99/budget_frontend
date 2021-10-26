export const getAccountBalance = (currentAccount, accountBalance) => {
  return { ...currentAccount, balance: accountBalance };
};

export const updateAccountBalance = (currentAccount, newBalance) => {
  console.log(`new balance ${currentAccount.balance}`);
  return {
    ...currentAccount,
    balance: (
      parseFloat(currentAccount.balance) + parseFloat(newBalance)
    ).toFixed(2),
  };
};
