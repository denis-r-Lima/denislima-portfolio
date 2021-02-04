import React from "react"
import navigateTo from "../../controllers/utils/scroll"

import { Container } from "./styles"


const TopMenu: React.FC = () => {

  return (
    <Container id="topMenu">
          <a href='#AboutMe' onClick={(e) => navigateTo(e)}> About Me</a>
          <a href='#Portfolio' onClick={(e) => navigateTo(e)}>Portfolio</a>
          <a href='#Contact' onClick={(e) => navigateTo(e)}> Contact</a>
    </Container>
  )
}

export default TopMenu
