import { useEffect, useState } from "react";
import {
  BurgerButton,
  GetInTouchButton,
  HeaderContainer,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as BurgerIcon } from "../../img/burger.svg";
import { ReactComponent as GetInTouchIcon } from "../../img/get-in-t.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <div>
          <Logo />
        </div>
        <div className="header-buttons">
          <BurgerButton onClick={handleMenuToggle}>
            <BurgerIcon />
          </BurgerButton>
          <GetInTouchButton to="contact-us" smooth={true}>
            <GetInTouchIcon />
          </GetInTouchButton>
        </div>
      </HeaderContainer>
      <BurgerMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
};

export default Header;
