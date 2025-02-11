import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkRegister = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: MontserratSemiBold, "sans-serif";
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h4`
  text-align: center;
`;

export const ButtonSubmit = styled.button`
  padding: 10px;
  border: none;
  margin: 10px 0;
  width: 80%;
  align-self: center;
  border-radius: 10px;
  background-color: #366dd3;
  color: white;
  font-family: MontserratSemiBold, "sans-serif";
`;
