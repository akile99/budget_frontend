import styled, { css } from "styled-components";

const TransactionListElement = css`
  border-style: none solid none none;
  margin: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;

export const TransactionTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TransactionListContainer = styled.tr`
  justify-content: center;
  display: flex;
  outline: 1px solid;
`;

export const DateContainer = styled.th`
  flex-grow: 0;
  justify-items: left;
  width: 8rem;
  text-align: center;
  ${TransactionListElement}
`;

export const VendorContainer = styled.th`
  ${TransactionListElement}
  flex-grow: 2;
  text-align: left;
  min-width: 8rem;
  border-bottom: none;
  padding-left: 1rem;
`;

export const StatusContainer = styled.th`
  cursor: pointer;
  min-width: 5em;
  ${TransactionListElement}
`;

export const Dollar = styled.th`
  border-style: none;
`;

export const AmountContainer = styled.th`
  text-align: right;
  padding-right: 1em;
  width: 5em;
  ${TransactionListElement}
`;

export const CategoryContainer = styled.th`
  flex-grow: 0;
  width: 8em;
  ${TransactionListElement}
`;
