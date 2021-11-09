import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 1rem;
`;

export const NavigationInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavigationSignOut = styled.div`
  font-size: 1.5rem;
  opacity: 1;
  transition: opacity 0.15s ease-in;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
`;
