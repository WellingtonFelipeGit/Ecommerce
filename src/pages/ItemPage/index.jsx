import Header from "../../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useUserInfoContext } from "../../hooks/useUserInfoContext";
import { LinkStyled } from "../../components/LinkStyled";

import {
  ButtonCart,
  ContainerItem,
  DescriptionItem,
  ImageItem,
  PriceItem,
  TitleItem,
} from "./ItemPageStyles";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemPage = () => {
  const { currentProduct, getId, addCart } = useProductsContext();
  const { currentUser } = useUserInfoContext();

  const params = useParams();
  useEffect(() => {
    getId(Number(params.id));
  });

  return (
    <>
      <Header>
        <LinkStyled color={"black"} to={"/"}>
          <IoMdArrowRoundBack size={30} />
        </LinkStyled>
        <LinkStyled to={"/cart"}>
          <RiShoppingBagLine size={30} />
        </LinkStyled>
      </Header>
      <ContainerItem>
        <TitleItem>{currentProduct.title}</TitleItem>
        <ImageItem src={currentProduct.thumbnail} />
        <DescriptionItem>{currentProduct.description}</DescriptionItem>
        <PriceItem>Price: ${currentProduct.price}</PriceItem>
        <ButtonCart onClick={() => addCart(currentUser)}>Add Cart</ButtonCart>
      </ContainerItem>
    </>
  );
};

export default ItemPage;
