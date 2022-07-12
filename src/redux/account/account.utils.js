export const updateAccountTotal = (accounts, currentAccount, balance) => {
  const accountToChange = accounts.find(
    (account) => account.account_id === currentAccount
  );
  return accounts.map((account) =>
    account.account_id === currentAccount
      ? {
          ...account,
          total: (
            parseFloat(accountToChange.total) + parseFloat(balance)
          ).toFixed(2),
        }
      : account
  );
};

export const updateAccountPending = (accounts, currentAccount, balance) => {
  const accountToChange = accounts.find(
    (account) => account.account_id === currentAccount
  );
  return accounts.map((account) =>
    account.account_id === currentAccount
      ? {
          ...account,
          pending: (
            parseFloat(accountToChange.pending) + parseFloat(balance)
          ).toFixed(2),
        }
      : account
  );
};
