import PropTypes from "prop-types";
import {
  BurgerMenuContainer,
  CloseButton,
  Nav,
  NavLink,
  SocialLinks,
  SocialLink,
  Backdrop,
} from "./BurgerMenu.styled";
import { ReactComponent as ArrowIcon } from "../../img/menuArrow.svg";
import { ReactComponent as Facebook } from "../../img/facebook.svg";
import { ReactComponent as Instagram } from "../../img/instagram.svg";
import { ReactComponent as CloseIcon } from "../../img/close.svg";

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <Backdrop $isOpen={isOpen} onClick={onClose} />}
      <BurgerMenuContainer $isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <CloseIcon /> Close
        </CloseButton>
        <Nav>
          <NavLink to="home" smooth duration={500}>
            Main
            <ArrowIcon />
          </NavLink>
          <NavLink to="about" smooth duration={500}>
            About <ArrowIcon />
          </NavLink>
          <NavLink to="services" smooth duration={500}>
            Services <ArrowIcon />
          </NavLink>
          <NavLink to="contact" smooth duration={500}>
            Contact <ArrowIcon />
          </NavLink>
        </Nav>
        <SocialLinks>
          <SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </SocialLink>
        </SocialLinks>
      </BurgerMenuContainer>
    </>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
