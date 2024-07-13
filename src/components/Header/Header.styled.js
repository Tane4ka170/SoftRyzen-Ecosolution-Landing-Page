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
  z-index: 1000; /* Зменшено з 1001 */
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

export const GetInTouchButton = styled(Link)`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
