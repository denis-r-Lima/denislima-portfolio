import React, { useEffect } from "react"
import Image from "next/image"

import { HeaderFrame, ImgFrame, TextCloud } from "./styles"
import typeText from "../../controllers/typeText/typeText"

const HeaderComponent: React.FC = () => {
  useEffect(() => {
    typeText(
      "Hi! I am Denis, and I am a JavaScript developer!",
      "CloudText"
    )
  }, [])

  return (
    <HeaderFrame>
      <ImgFrame>
      <Image src="/img/myself.jpeg" layout="fill"/>
      </ImgFrame>
      <TextCloud id='CloudText' />
    </HeaderFrame>
  )
}

export default HeaderComponent
