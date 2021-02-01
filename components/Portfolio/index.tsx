import React from "react"
import { DiCodeBadge } from "react-icons/di"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

import {
  Container,
  PortfolioTitle,
  PortfolioContainer,
  PortfolioCard,
  PortfolioDescription,
  GitButton,
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
          <Image src='/img/projects/ez_converter.PNG' layout='fill' />
          <PortfolioDescription>
            Mobile app made in React Native that access one external API to
            fetch data to get updated currency exchange rate.
            <GitButton
              href='https://github.com/denis-r-Lima/EZC'
              target='_blank'
            >
              View on <FaGithub size='1.5rem' />
            </GitButton>
          </PortfolioDescription>
        </PortfolioCard>
        <PortfolioCard>
          <Image src='/img/projects/chat_live.PNG' layout='fill' />
          <PortfolioDescription>
            Live Chat app made in vanila JavaScript, express and Socket.io.
            <GitButton
              href='https://github.com/denis-r-Lima/ChatLive'
              target='_blank'
            >
              View on <FaGithub size='1.5rem' />
            </GitButton>
          </PortfolioDescription>
        </PortfolioCard>
        <PortfolioCard>
          <Image src='/img/projects/portfolio.png' layout='fill' />
          <PortfolioDescription>
            This very same web site, made using React/Next.js, TypeScript and
            Styled-Components.
            <GitButton
              href='https://github.com/denis-r-Lima/denislima-portfolio'
              target='_blank'
            >
              View on <FaGithub size='1.5rem' />
            </GitButton>
          </PortfolioDescription>
        </PortfolioCard>
      </PortfolioContainer>
    </Container>
  )
}

export default Portfolio
