import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";

export const MainStyled = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  margin: auto;
`;

export const IoMdMenuStyled = styled(IoMdMenu)`
  @media (min-width: 1240px) {
    display: none;
  }
`;

export const LogoStyled = styled.p`
  font-family: MontserratBold, "sans-serif";
  font-size: 30px;
  margin: 0;
  display: none;
  @media (min-width: 1240px) {
    display: block;
  }
`;
