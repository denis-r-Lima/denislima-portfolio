import React, { useState } from "react";
import { MenuItems } from "./MenuConstants";
import { useRouter } from "next/router";

import {
  Container,
  BurgerMenuContainer,
  BurgerLines,
  Wrapper,
  MenuSideDiv,
  MenuButton,
} from "./styles";
type SideMenu = {
  className: string;
};
const SideMenu: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  const handleMenu = () => {
    setShow((prevState) => !prevState);
  };

  const handleMenuClick = (url: string) => () => {
    router.push(url);
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
        className={`show ${show && "opened"}`}
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
