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
        <Title id="PortfolioTitle">Projects</Title>
        <PortfolioContainer>
          {portfolio.map((item) => (
            <PortfolioCard
              src={item.image}
              key={item.gitHub}
              text={item.description}
              link={item.gitHub}
            />
          ))}
        </PortfolioContainer>
      </InnerContainer>
    </Container>
  );
};

export default Portfolio;
