import React from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";

import { Container, Door, Image, Text } from "./cardStyles";

interface Props {
  src: string;
  text: string;
  link: string;
}

const PortfolioCard: React.FC<Props> = ({ src, text, link }) => {
  const theme = useTheme();
  return (
    <Container className="project">
      <Image src={src} />
      <Door className="top" />
      <Door className="bottom" />
      <Text>
        <div>
          <ReactMarkdown children={text} />
        </div>
        <div>
          <a href={link} target="_blank">
            <StyledButton
              backgroundColor={theme.pallet.color.secondary}
              color={theme.typography.color}
            >
              View on GitHub
            </StyledButton>
          </a>
        </div>
      </Text>
    </Container>
  );
};

export default PortfolioCard;
