import styled from "styled-components";
import { Link } from "react-scroll";

export const BurgerMenuContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #333;
  z-index: 1001;
  padding: 20px;
`;

export const Backdrop = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  & svg {
    margin-left: 10px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
`;
