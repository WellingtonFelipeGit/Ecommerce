import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ParagraphStyled = styled.p`
  font-family: MontserratSemiBold, "sans-serif";
  @media (min-width: 1240px) {
    font-size: 25px;
  }
`;

export const RiShoppingBagLineStyled = styled(RiShoppingBagLine)`
  font-size: 30px;
  @media (min-width: 1240px) {
    font-size: 40px;
  }
`;
