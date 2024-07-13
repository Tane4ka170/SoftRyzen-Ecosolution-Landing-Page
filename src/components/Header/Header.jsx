import { useEffect } from "react";
import { useState } from "react";
import {
  BurgerButton,
  BurgerMenu,
  CloseButton,
  GetInTouchButton,
  HeaderContainer,
  Nav,
  NavLink,
  SocialLink,
  SocialLinks,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as BurgerIcon } from "../../img/burger.svg";
import { ReactComponent as GetInTouchIcon } from "../../img/get-in-t.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <div>
          <Logo />
        </div>
        <BurgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BurgerIcon />
        </BurgerButton>
        <GetInTouchButton to="contact-us" smooth={true}>
          <GetInTouchIcon />
        </GetInTouchButton>
      </HeaderContainer>
      <BurgerMenu isOpen={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>✕ close</CloseButton>
        <Nav>
          <NavLink to="main" smooth={true} onClick={() => setIsMenuOpen(false)}>
            Main
          </NavLink>
          <NavLink
            to="about"
            smooth={true}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="cases"
            smooth={true}
            onClick={() => setIsMenuOpen(false)}
          >
            Cases
          </NavLink>
          <NavLink to="faq" smooth={true} onClick={() => setIsMenuOpen(false)}>
            FAQ
          </NavLink>
          <NavLink
            to="contact-us"
            smooth={true}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </Nav>
        <SocialLinks>
          <SocialLink href="https://facebook.com">F</SocialLink>
          <SocialLink href="https://instagram.com">I</SocialLink>
        </SocialLinks>
      </BurgerMenu>
    </>
  );
};

export default Header;
