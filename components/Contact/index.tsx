import React from "react"
import { FaEnvelopeOpenText , FaLinkedin, FaGithub} from "react-icons/fa"

import { Container, AboutTitle as ContactTitle } from "../AboutMe/styles"

interface Props {
  id?: string
}

const Contact: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <ContactTitle>
        <FaEnvelopeOpenText
          color='#adc9f5'
          size='8rem'
          style={{ marginRight: "1rem" }}
        />
        Contact Me
      </ContactTitle>
      <p>
        Do you want to talk? Any question about my projects? Want me as part of
        your team?
      </p>
      <p>
        E-mail me @{" "}
        <a href='mailto:denis.r.lima88@gmail.com'> denis.r.lima88@gmail.com </a>.
      </p>
      <p style={{textAlign: "center"}}>
        You can also find me on:</p>
        <p style={{textAlign: "center"}}>
        <a href='https://www.linkedin.com/in/denis-roberto-alves-de-almeida-lima-1a122575/' target="_blank">
          <FaLinkedin size="3rem"  color="#000"  style={{marginRight:"1rem"}}/>
        </a>{" "}
        <a href='https://github.com/denis-r-Lima' target="_blank"><FaGithub size="3rem" color="#000" /></a>
      </p>
    </Container>
  )
}

export default Contact
