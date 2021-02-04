import React from "react"
import navigateTo from "../../controllers/utils/scroll"

import { Container, ButtonItem } from "./styles"


const TopMenu: React.FC = () => {

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
