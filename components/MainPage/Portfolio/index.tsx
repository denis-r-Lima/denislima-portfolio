import React from "react";
import Image from "next/image";

import { DiCodeBadge } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO as PORTFOLIO_ARR } from "./utils";

import {
  Container,
  PortfolioTitle,
  PortfolioContainer,
  PortfolioCard,
  PortfolioDescription,
  GitButton,
} from "./styles";
import ReactMarkdown from "react-markdown";

interface Props {
  id?: string;
  portfolio: PortfolioItemType[];
}

const Portfolio: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <PortfolioTitle>
        <DiCodeBadge
          size="8rem"
          color="#275DAD"
          style={{ marginRight: "1rem" }}
        />
        Portfolio
      </PortfolioTitle>
      <PortfolioContainer>
        {props.portfolio?.map((item, index) => (
          <PortfolioCard key={`${item.image} - ${index}`}>
            <Image src={item.image} layout="fill" />
            <PortfolioDescription>
              <ReactMarkdown children={item.description} />
              <GitButton href={item.gitHub} target="_blank">
                View on <FaGithub size="1.6rem" />
              </GitButton>
            </PortfolioDescription>
          </PortfolioCard>
        ))}
      </PortfolioContainer>
    </Container>
  );
};

export default Portfolio;
