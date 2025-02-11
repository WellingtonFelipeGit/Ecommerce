import Header from "../../components/Header";
import { LinkStyled } from "../../components/LinkStyled";
import { RiHomeFill } from "react-icons/ri";

import { useProductsContext } from "../../hooks/useProductsContext";
import { useUserInfoContext } from "../../hooks/useUserInfoContext";
import { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  CardImg,
  CardItemPrice,
  CardItemQtd,
  CardItemTitle,
  CartContainer,
  CartItemCard,
  CartTitle,
  CartValue,
  TextContainer,
} from "./CartPageStyles";

const CartPage = () => {
  const { getList, list, totalValue, getTotalValue, addCart, removeCart } =
    useProductsContext();
  const { currentUser } = useUserInfoContext();

  useEffect(() => {
    if (currentUser) {
      getList(currentUser);
      getTotalValue();
    } else {
      console.log("Sem usuario");
    }
  }, [list]);
  return (
    <>
      <Header>
        <LinkStyled color={"black"} to={"/"}>
          <RiHomeFill size={30} />
        </LinkStyled>
        <CartTitle>Cart</CartTitle>
      </Header>
      <CartContainer>
        {currentUser ? (
          list.map((item) => (
            <CartItemCard key={item.id}>
              <TextContainer>
                <CardItemTitle>{item.name}</CardItemTitle>
                <CardItemQtd>
                  Amount:{" "}
                  <FaMinus
                    size={15}
                    onClick={() => removeCart(currentUser, item.id)}
                  />
                  {item.qtd}
                  <FaPlus
                    size={15}
                    onClick={() => addCart(currentUser, item)}
                  />
                </CardItemQtd>
                <CardItemPrice>
                  $ {(item.qtd * item.price).toFixed(2)}
                </CardItemPrice>
              </TextContainer>
              <CardImg src={item.img} />
            </CartItemCard>
          ))
        ) : (
          <h2>Log in to access the cart.</h2>
        )}
        {currentUser ? <CartValue>Total Value: $ {totalValue}</CartValue> : ""}
      </CartContainer>
    </>
  );
};

export default CartPage;
