import React from "react"
import { FaCode } from "react-icons/fa"

import { Container, PortfolioTitle } from "./styles"

interface Props {
  id?: string
}

const Portfolio: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <PortfolioTitle>
        <FaCode size='8rem' color='#275DAD' style={{ marginRight: "1rem" }} />
        My Portfolio
      </PortfolioTitle>
    </Container>
  )
}

export default Portfolio
