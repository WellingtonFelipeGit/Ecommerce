import { LinkStyled } from "../LinkStyled";
import {
  ImageStyled,
  SwiperStyled,
  SwiperContainer,
  SwiperSlideStyled,
  TextContainer,
  TitleText,
  DescriptionText,
  ButtonStyled,
} from "./BannerStyles";

import { Pagination } from "swiper/modules";

const Banner = ({ items }) => {
  return (
    <SwiperContainer>
      <SwiperStyled
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={10}
      >
        {items.map((item) => (
          <SwiperSlideStyled key={item.id}>
            <TextContainer>
              <TitleText>{item.title}</TitleText>
              <DescriptionText>{item["description"]}</DescriptionText>
              <LinkStyled to={`/item/${item.id}`}>
                <ButtonStyled>Shop Now</ButtonStyled>
              </LinkStyled>
            </TextContainer>
            <ImageStyled src={item["thumbnail"]} />
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </SwiperContainer>
  );
};

export default Banner;
