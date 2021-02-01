import React from "react"
import { DiCodeBadge } from "react-icons/di"

import {
  Container,
  PortfolioTitle,
  PortfolioContainer,
  PortfolioCard,
  PortfolioDescription
} from "./styles"

interface Props {
  id?: string
}

const Portfolio: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <PortfolioTitle>
        <DiCodeBadge
          size='8rem'
          color='#275DAD'
          style={{ marginRight: "1rem" }}
        />
        Portfolio
      </PortfolioTitle>
      <PortfolioContainer>
        <PortfolioCard>
        <div style={{width:"25rem", height:"17.5rem", backgroundColor:"#333"}}></div>
          <PortfolioDescription>
            Coming soon!
          </PortfolioDescription>
        </PortfolioCard>
        <PortfolioCard>
        <div style={{width:"25rem", height:"17.5rem", backgroundColor:"#333"}}></div>
          <PortfolioDescription>
            Coming soon!
          </PortfolioDescription>
        </PortfolioCard>
        <PortfolioCard>
        <div style={{width:"25rem", height:"17.5rem", backgroundColor:"#333"}}></div>
          <PortfolioDescription>
            Coming soon!
          </PortfolioDescription>
        </PortfolioCard>
        <PortfolioCard>
        <div style={{width:"25rem", height:"17.5rem", backgroundColor:"#333"}}></div>
          <PortfolioDescription>
            Coming soon!
          </PortfolioDescription>
        </PortfolioCard>
      </PortfolioContainer>
    </Container>
  )
}

export default Portfolio
