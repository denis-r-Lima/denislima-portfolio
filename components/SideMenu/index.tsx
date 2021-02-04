import React, { useRef } from "react"
import navigateTo from "../../controllers/utils/scroll"

import { Container, Menu, MenuCall, BurguerMenu, MenuButton } from "./styles"

const SideMenu: React.FC = () => {
  let callMenu = useRef<null | HTMLDivElement>(null)

  let burguer = useRef<null | HTMLDivElement>(null)

  const OpenCloseMenu = (div: HTMLDivElement, burguerEle: HTMLDivElement) => {
    if (div.classList.contains("Hidden")) {
      div.classList.remove("Hidden")
      burguerEle.classList.add("Selected")
    } else {
      div.classList.add("Hidden")
      burguerEle.classList.remove("Selected")
    }
  }

  const ClickOutMenu = (
    e: React.MouseEvent<HTMLDivElement>,
    burguerEle: HTMLDivElement
  ) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.add("Hidden")
      burguerEle.classList.remove("Selected")
    }
  }

  return (
    <>
      <Container
        ref={callMenu}
        className='Hidden'
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          ClickOutMenu(e, burguer.current as HTMLDivElement)
        }
      >
        <Menu id='Menu'>
          <ul>
            <MenuButton
              onClick={() => {
                OpenCloseMenu(
                  callMenu.current as HTMLDivElement,
                  burguer.current as HTMLDivElement
                )
              }}
            >
              <a href='#AboutMe' onClick={(e) => navigateTo(e)}>About Me</a>
            </MenuButton>
            <MenuButton
              onClick={() => {
                OpenCloseMenu(
                  callMenu.current as HTMLDivElement,
                  burguer.current as HTMLDivElement
                )
              }}
            >
              <a href='#Portfolio' onClick={(e) => navigateTo(e)}>Portfolio</a>
            </MenuButton>
            <MenuButton
              onClick={() => {
                OpenCloseMenu(
                  callMenu.current as HTMLDivElement,
                  burguer.current as HTMLDivElement
                )
              }}
            >
              <a href='#Contact' onClick={(e) => navigateTo(e)}>Contact Me</a>
            </MenuButton>
          </ul>
        </Menu>
      </Container>
      <MenuCall
        ref={burguer}
        onClick={() => {
          OpenCloseMenu(
            callMenu.current as HTMLDivElement,
            burguer.current as HTMLDivElement
          )
        }}
      >
        <BurguerMenu id='Top' />
        <BurguerMenu id='Middle' />
        <BurguerMenu id='Bottom' />
      </MenuCall>
    </>
  )
}

export default SideMenu
