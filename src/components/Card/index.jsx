import {
  CardContainer,
  CardImage,
  CardPrice,
  CardPriceDescount,
  CardTitle,
} from "./CardStyles";
import { LinkStyled } from "../LinkStyled";

const Card = ({ item, image, title, price, descount }) => {
  return (
    <LinkStyled to={`/item/${item.id}`}>
      <CardContainer>
        <CardImage src={image} />
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
        <CardPriceDescount>${descount}</CardPriceDescount>
      </CardContainer>
    </LinkStyled>
  );
};

export default Card;
