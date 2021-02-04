import React from "react"

import { Container, ButtonItem } from "./styles"

const TopMenu: React.FC = () => {

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const destination = e.currentTarget.getAttribute("href")
    const targetElement = document.querySelector(destination) as HTMLDivElement
    
    const offsetTop = targetElement.offsetTop

    scroll({
      top: offsetTop,
      behavior: "smooth"
    })
    
  }

  return (
    <Container id="topMenu">
      <ul>
        <ButtonItem>
          <a href='#AboutMe' onClick={(e) => navigateTo(e)}> About Me</a>
        </ButtonItem>
        <ButtonItem>
          <a href='#Portfolio' onClick={(e) => navigateTo(e)}>Portfolio</a>
        </ButtonItem>
        <ButtonItem>
          <a href='#Contact' onClick={(e) => navigateTo(e)}> Contact</a>
        </ButtonItem>
      </ul>
    </Container>
  )
}

export default TopMenu
