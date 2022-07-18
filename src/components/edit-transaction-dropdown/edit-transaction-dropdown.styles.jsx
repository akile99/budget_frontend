import styled from "styled-components";
import Select from "react-select";

export const TransactionDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 100px;
  z-index: 5;
`;

export const TransactionItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Selector = styled(Select)`
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 100%;
`;
