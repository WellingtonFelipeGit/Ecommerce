import styled from "styled-components";

export const ContainerItem = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`;

export const TitleItem = styled.h3`
  margin: 0;
`;

export const ImageItem = styled.img``;

export const DescriptionItem = styled.p`
  font-size: 16px;
`;

export const PriceItem = styled.p`
  font-family: MontserratSemiBold, "sans-serif";
`;

export const ButtonCart = styled.button`
  font-family: MontserratSemiBold, "sans-serif";
  padding: 15px;
  border: none;
  background-color: #366dd3;
  color: white;
  border-radius: 10px;
  align-self: center;
`;
