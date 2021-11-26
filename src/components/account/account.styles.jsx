import styled from "styled-components";

export const AccountContainer = styled.div`
  margin: 2px;
  border-style: solid;
  border-radius: 8px;
  min-width: 8em;
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  cursor: pointer;
`;

export const AccountName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 0.25rem;
  padding-top: 0.5rem;
`;

export const Name = styled.p`
  font-weight: bold;
  padding: 0.2rem;
  margin: unset;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-weight: bold;
  padding-left: 0.25rem;
  padding-bottom: 1rem;
`;
