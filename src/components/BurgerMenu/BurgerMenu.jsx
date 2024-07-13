import PropTypes from "prop-types";
import {
  BurgerMenuContainer,
  CloseButton,
  Nav,
  NavLink,
  SocialLinks,
  SocialLink,
} from "./BurgerMenu.styled";
import { ReactComponent as ArrowIcon } from "../../img/menuArrow.svg";
import { ReactComponent as Facebook } from "../../img/facebook.svg";
import { ReactComponent as Instagram } from "../../img/instagram.svg";

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <BurgerMenuContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>✕ close</CloseButton>
      <Nav>
        <NavLink to="main" smooth={true} onClick={onClose}>
          Main <ArrowIcon />
        </NavLink>
        <NavLink to="about" smooth={true} onClick={onClose}>
          About <ArrowIcon />
        </NavLink>
        <NavLink to="cases" smooth={true} onClick={onClose}>
          Cases <ArrowIcon />
        </NavLink>
        <NavLink to="faq" smooth={true} onClick={onClose}>
          FAQ <ArrowIcon />
        </NavLink>
        <NavLink to="contact-us" smooth={true} onClick={onClose}>
          Contact Us <ArrowIcon />
        </NavLink>
      </Nav>
      <SocialLinks>
        <SocialLink href="https://facebook.com">
          <Facebook />
        </SocialLink>
        <SocialLink href="https://instagram.com">
          <Instagram />
        </SocialLink>
      </SocialLinks>
    </BurgerMenuContainer>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
