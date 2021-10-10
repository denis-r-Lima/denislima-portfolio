import React from "react";
import { FaRegComment } from "react-icons/fa";

import { Container, AboutTitle, AboutContent } from "./styles";

interface Props {
  id?: string;
  content: string;
}

const AboutMe: React.FC<Props> = (props: Props) => {
  return (
    <Container id={props.id ? props.id : ""}>
      <AboutTitle>
        <FaRegComment
          color="#adc9f5"
          size="7rem"
          style={{ marginRight: "1rem" }}
        />
        About Me
      </AboutTitle>
      <AboutContent>{props.content}</AboutContent>
    </Container>
  );
};

export default AboutMe;
