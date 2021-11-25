import styled from "styled-components";

export const BillDropDownContainer = styled.div`
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

export const BillItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
