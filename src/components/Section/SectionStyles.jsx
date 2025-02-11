import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const DivStyled = styled.div`
  padding-bottom: 40px;
  width: 100vw;
  min-height: 100vh;
  margin: auto;
  @media (min-width: 1240px) {
    padding: 10px;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  z-index: 0;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 250px;
  overflow: hidden;
  @media (min-width: 1240px) {
    height: 600px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const SectionTitle = styled.h3`
  margin-bottom: 10px;
  @media (min-width: 1240px) {
    font-size: 50px;
  }
`;

export const SectionCategory = styled.h4`
  margin: 10px 0;
  display: flex;
  width: 100%;
  @media (min-width: 1240px) {
    font-size: 30px;
    margin: 30px 0;
  }
`;
