import { useUserInfoContext } from "../../hooks/useUserInfoContext";
import {
  MenuContainer,
  NavStyled,
  NavLinkStyled,
  SpanStyled,
  Overlay,
  ButtonLogout,
} from "./MenuStyles";

import { IoMdClose, IoMdExit } from "react-icons/io";

const Menu = ({ active, onClose }) => {
  const { currentUser, logout } = useUserInfoContext();

  return active ? (
    <>
      <Overlay />
      <MenuContainer>
        <IoMdClose size={30} onClick={() => onClose(false)} />
        <NavStyled>
          {!currentUser ? (
            <>
              <NavLinkStyled to={"/login"}>Log</NavLinkStyled>
              <NavLinkStyled to={"/register"}>Register</NavLinkStyled>
            </>
          ) : (
            <ButtonLogout onClick={() => logout()}>
              <IoMdExit size={20} />
              Logout
            </ButtonLogout>
          )}

          <SpanStyled>Categories</SpanStyled>
          <NavLinkStyled to={"/category/all"}>All</NavLinkStyled>
          <NavLinkStyled to={"/category/beauty"}>Beauty</NavLinkStyled>
          <NavLinkStyled to={"/category/fragrances"}>Fragrances</NavLinkStyled>
          <NavLinkStyled to={"/category/furniture"}>Furniture</NavLinkStyled>
          <NavLinkStyled to={"/category/groceries"}>Groceries</NavLinkStyled>
          <NavLinkStyled to={"/category/home-decoration"}>
            Home Decoration
          </NavLinkStyled>
          <NavLinkStyled to={"/category/kitchen-accessories"}>
            Kitchen Accessories
          </NavLinkStyled>
          <NavLinkStyled to={"/category/laptops"}>Laptops</NavLinkStyled>
          <NavLinkStyled to={"/category/mens-shirts"}>
            Mens Shirts
          </NavLinkStyled>
          <NavLinkStyled to={"/category/mens-shoes"}>Mens Shoes</NavLinkStyled>
          <NavLinkStyled to={"/category/womens-dresses"}>
            Womens Dresses
          </NavLinkStyled>
        </NavStyled>
      </MenuContainer>
    </>
  ) : (
    ""
  );
};

export default Menu;
