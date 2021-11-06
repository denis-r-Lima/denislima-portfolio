import React from "react";
import PercentageBar from "./PercentageBar";

import {
  Container,
  InnerContainer,
  Title,
  Card,
  ImgContainer,
  Question,
  Text,
} from "./styles";

interface Props {
  content: ContentType;
}

const About: React.FC<Props> = ({ content }) => {
  return (
    <Container>
      <Title className="title">About</Title>
      <InnerContainer>
        <Card className="card" id="Me">
          <ImgContainer />
          <Question>Who am I?</Question>
          <Text>{content?.about}</Text>
        </Card>
        <Card className="card" id="Skills">
          {content?.frontEndTech.map((tech) => (
            <PercentageBar
              key={tech.name}
              name={tech.name}
              percentage={tech.value}
            />
          ))}
          {content?.backEndTech.map((tech) => (
            <PercentageBar
              key={tech.name}
              name={tech.name}
              percentage={tech.value}
            />
          ))}
        </Card>
      </InnerContainer>
    </Container>
  );
};

export default About;
