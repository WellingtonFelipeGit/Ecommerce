import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 15px 0 10px 15px;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 250px;
  overflow: hidden;
  .swiper-wrapper {
    width: inherit;
  }
  .swiper-pagination {
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    padding-right: 20px;
    .swiper-pagination-bullet {
      border-radius: 0;
      width: 12px;
      height: 4px;
    }
  }
  @media (min-width: 1240px) {
    height: 400px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ImageStyled = styled.img`
  width: 60%;
  height: 30vh;
  object-fit: cover;
  @media (min-width: 1240px) {
    width: 30%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 200px;
  justify-content: space-around;
`;
export const TitleText = styled.h1`
  margin: 0;
  font-family: MontserratBold, "sans-serif";
  font-size: 20px;
  @media (min-width: 1240px) {
    font-size: 40px;
    margin: 10px 0;
  }
`;

export const DescriptionText = styled.p`
  margin: 5px 0;
  font-size: 8px;
  @media (min-width: 1240px) {
    font-size: 30px;
    margin: 10px 0;
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  font-family: MontserratSemiBold, "sans-serif";
  font-size: 13px;
  padding: 0;
  @media (min-width: 1240px) {
    font-size: 30px;
    margin: 20px 0;
  }
`;
