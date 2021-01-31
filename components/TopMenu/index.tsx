import React from "react"

import { Container, ButtonItem } from "./styles"

const TopMenu: React.FC = () => {
  return (
    <Container>
      <ul>
        <ButtonItem>
          <a href='#AboutMe'> About Me</a>
        </ButtonItem>
        <ButtonItem>
          <a href='#Portfolio'>Portfolio</a>
        </ButtonItem>
        <ButtonItem>
          <a href='#Contact'> Contact</a>
        </ButtonItem>
      </ul>
    </Container>
  )
}

export default TopMenu
