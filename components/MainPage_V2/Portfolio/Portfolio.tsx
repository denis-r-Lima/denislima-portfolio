import React from "react";
import PortfolioCard from "./PortfolioCard";

import { Container, Title, InnerContainer, PortfolioContainer } from "./styles";

interface Props {
  portfolio: PortfolioItemType[];
}

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  return (
    <Container>
      <InnerContainer>
        <Title className="title">Projects</Title>
        <PortfolioContainer id="Cards">
          {portfolio.map((item, index) => (
            <PortfolioCard
              src={item.image}
              key={item.gitHub}
              text={item.description}
              link={item.gitHub}
              delay={index}
            />
          ))}
        </PortfolioContainer>
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
