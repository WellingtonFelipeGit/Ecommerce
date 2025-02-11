import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.aside`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  border-radius: 0 10px 10px 0px;
  padding: 10px;
`;
export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #10426a;
  font-family: MontserratSemiBold, "sans-serif";
`;

export const SpanStyled = styled.span`
  font-family: MontserratBold, sans-serif;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ButtonLogout = styled.button`
  background: transparent;
  border: none;
  display: flex;
  gap: 10px;
  padding: 0;
  font-family: MontserratSemiBold, "sans-serif";
  margin: 10px 0;
`;
