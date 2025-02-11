import styled from "styled-components";

export const CartTitle = styled.h3`
  margin: 0;
  padding: 0;
  align-self: center;
  justify-self: center;
  position: absolute;
  right: 45%;
`;

export const CartContainer = styled.div`
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CartItemCard = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  margin: 5px 0;
`;

export const CardItemTitle = styled.h4`
  margin: 0;
`;

export const CardItemPrice = styled.p`
  font-family: MontserratSemiBold, "sans-serif";
`;

export const CardItemQtd = styled.p`
  font-family: MontserratSemiBold, "sans-serif";
  display: flex;
  gap: 10px;
`;

export const TextContainer = styled.div``;

export const CardImg = styled.img`
  width: 150px;
`;

export const CartValue = styled.p`
  font-family: MontserratSemiBold, "sans-serif";
`;
