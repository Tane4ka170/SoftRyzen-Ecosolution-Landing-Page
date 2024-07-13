import { Link } from "react-scroll";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  transition: background-color 0.3s;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#ffffff" : "transparent"};
  z-index: 1000;
`;

export const BurgerButton = styled.button`
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ContactButton = styled(Link)`
  display: inline-block;
  background-color: #8bc34a;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 24px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 24px;
`;

export const GetInTouchButton = styled(Link)`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
