import styled, { css } from "styled-components";
import Select from "react-select";

const Input = css`
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const InsertTransactionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const InsertFormContainer = styled.form`
  display: flex;
  align-items: center;
  /* padding: 2rem; */
  padding-bottom: 2rem;
  border-radius: 0.5rem;
`;

export const InputContainer = styled.input`
  ${Input}

  width: 20%;
`;

export const VendorInput = styled.input`
  ${Input}
  width: 25%;
`;

export const Selector = styled(Select)`
  ${Input}
  width: 30%;
`;

export const CustomButton = styled.button`
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  text-transform: none;
  display: inline-block;
  width: 15%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in;
  background-color: #dae6ff;
  color: black;
  ${Input}
`;

// .btn - white {
// 	padding: 0;
// 	background: white;
// }

// .form {
// 	display: flex;
//     align-items: center;
// }
