import React, { useEffect } from "react"

import { HeaderFrame, ImgFrame, TextCloud } from "./styles"
import typeText from "../../controlers/typeText/typeText"

const HeaderComponent: React.FC = () => {
  useEffect(() => {
    typeText(
      "Hi! I am Denis, and I am a JavaScript developer!",
      "CloudText"
    )
  }, [])

  return (
    <HeaderFrame>
      <ImgFrame />
      <TextCloud id='CloudText' />
    </HeaderFrame>
  )
}

export default HeaderComponent
