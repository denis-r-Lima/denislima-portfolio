import React from "react"
import { DiCodeBadge } from "react-icons/di"

import { Container, PortfolioTitle } from "./styles"

interface Props {
  id?: string
}

const Portfolio: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <PortfolioTitle>
        <DiCodeBadge size='8rem' color='#275DAD' style={{ marginRight: "1rem" }} />
        Portfolio
      </PortfolioTitle>
    </Container>
  )
}

export default Portfolio
