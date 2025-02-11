import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 32vw;
  height: 220px;
  padding: 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (min-width: 1240px) {
    align-items: center;
    height: 500px;
    padding: 30px 30px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  @media (min-width: 1240px) {
    width: 50%;
  }
`;

export const CardTitle = styled.h4`
  font-size: 15px;
  margin: 0;
  @media (min-width: 1240px) {
    font-size: 30px;
  }
`;

export const CardPrice = styled.p`
  margin: 10px 0;
  font-family: MontserratSemiBold, "sans-serif";
  font-size: 13px;
  color: gray;
  text-decoration: line-through;
  @media (min-width: 1240px) {
    font-size: 30px;
  }
`;

export const CardPriceDescount = styled.p`
  margin: 0;
  @media (min-width: 1240px) {
    font-size: 30px;
  }
`;
