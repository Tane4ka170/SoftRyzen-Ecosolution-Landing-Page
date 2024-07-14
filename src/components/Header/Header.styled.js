import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ isscrolled }) =>
    isscrolled === "true" ? "#222" : "transparent"};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s;

  .header-buttons {
    display: flex;
    align-items: center;
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

export const GetInTouchButton = styled(Link)`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
