import React from "react"
import { FaRegComment } from "react-icons/fa"

import { Container, AboutTitle } from "./styles"

interface Props {
  id?: string
}

const AboutMe: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
        <AboutTitle>
        <FaRegComment color="#adc9f5" size="8rem" style={{marginRight:"1rem"}}/>About Me 
        </AboutTitle>
        <p>
      Hi, I am Denis Lima, like the guy above sad =). </p>
      <p>I am a petroleum engineer who always was passionate about coding, and
      motorcycles.</p> 
      <p>Everything started a long time ago, I don't know, maybe when
      I was 14 or 15 years old, personal blogs was the big thing of the moment
      and I decided to build a small page to provide templates for that, few
      years later I started my bachelor degree in engineering and I learned the
      basics of software development, using C. </p>
      <p>After finished my degree I started my professional carrier, and it really
      bothered me that simple tasks could be made easier and more efficient with
      a proper software, so I started to develop small applications for the
      team, and the more I studied about software development the more I felt in
      love for the subject. </p>
      <p>Now, after several years working in oil {`&`} gas industry I am ready to
      start a new carrier as software developer.</p>
    </Container>
  )
}

export default AboutMe
