import React, { useEffect, useState } from "react";
import navigateTo from "../../../controllers/utils/scroll";
import { MenuItems } from "./MenuConstants";

import {
  Container,
  BurgerMenuContainer,
  BurgerLines,
  Wrapper,
  MenuSideDiv,
  MenuButton,
} from "./SideMenuStyles";
type SideMenu = {
  className: string;
};
const SideMenu: React.FC<SideMenu> = ({ className }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => setShow(false), [className]);

  const handleMenu = () => {
    setShow((prevState) => !prevState);
  };

  const handleMenuClick = (target: string) => () => {
    navigateTo(target);
    setShow(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShow(false);
  };

  return (
    <>
      <Container className={show && "show"} onClick={handleOutsideClick}>
        <MenuSideDiv>
          {MenuItems.map((item) => (
            <MenuButton key={item.label} onClick={handleMenuClick(item.url)}>
              {item.label}
            </MenuButton>
          ))}
        </MenuSideDiv>
      </Container>
      <BurgerMenuContainer
        className={`${className} ${show && "opened"}`}
        onClick={handleMenu}
      >
        <Wrapper>
          <BurgerLines />
        </Wrapper>
        <Wrapper>
          <BurgerLines />
        </Wrapper>
        <Wrapper>
          <BurgerLines />
        </Wrapper>
      </BurgerMenuContainer>
    </>
  );
};

export default SideMenu;
