import styled, { css } from "styled-components";

const TransactionElement = css`
  border-style: none solid none none;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TransactionContainer = styled.tr`
  outline: 1px solid;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const DateContainer = styled.td`
  flex-grow: 0;
  justify-items: left;
  width: 8rem;
  text-align: center;
  ${TransactionElement}
`;

export const VendorContainer = styled.td`
  ${TransactionElement}
  flex-grow: 2;
  text-align: left;
  min-width: 8rem;
  border-bottom: none;
  padding-left: 2rem;
`;

export const StatusContainer = styled.td`
  cursor: pointer;
  min-width: 5em;
  ${TransactionElement}
`;

export const Dollar = styled.td`
  border-style: none;
`;

export const AmountContainer = styled.td`
  text-align: right;
  padding-right: 1em;
  width: 5em;
  ${TransactionElement}
`;

export const CategoryContainer = styled.td`
  flex-grow: 0;
  width: 8em;
  ${TransactionElement}
`;

export const EditContainer = styled.td`
  cursor: pointer;
  min-width: 5em;
  ${TransactionElement}
`;
