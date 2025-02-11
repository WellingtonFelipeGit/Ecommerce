import {
  SectionTitle,
  SectionCategory,
  DivStyled,
  SwiperContainer,
  SwiperStyled,
  SwiperSlideStyled,
} from "./SectionStyles";
import { useProductsContext } from "../../hooks/useProductsContext";

import Card from "../Card";

const Section = () => {
  const { firstSection, secondSection, nameFirstSection, nameSecondSection } =
    useProductsContext();

  return (
    <DivStyled>
      <SectionTitle>Promotions</SectionTitle>
      <SwiperContainer>
        <SectionCategory>{nameFirstSection}</SectionCategory>
        <SwiperStyled
          slidesPerView={2}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {firstSection.map((item) => (
            <SwiperSlideStyled key={item.id}>
              <Card
                item={item}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                descount={(
                  item.price -
                  (item.price / 100) * item.discountPercentage
                ).toFixed(2)}
              />
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      </SwiperContainer>
      <SwiperContainer>
        <SectionCategory>{nameSecondSection}</SectionCategory>
        <SwiperStyled
          slidesPerView={2}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {secondSection.map((item) => (
            <SwiperSlideStyled key={item.id}>
              <Card
                item={item}
                image={item.thumbnail}
                title={item.title}
                price={item.price}
                descount={(
                  item.price -
                  (item.price / 100) * item.discountPercentage
                ).toFixed(2)}
              />
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      </SwiperContainer>
    </DivStyled>
  );
};

export default Section;
