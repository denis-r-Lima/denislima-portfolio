import React from "react";
import { FaRegComment } from "react-icons/fa";

import { Container, AboutTitle } from "./styles";

interface Props {
  id?: string;
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
      <p>Hi, I am Denis Lima, like the guy above said =).</p>
      <br />
      <p>
        I am a petroleum engineer who always was passionate about coding, and
        motorcycles.
      </p>
      <br />
      <p>
        Everything started a long time ago, I don't know, maybe when I was 14 or
        15 years old, personal blogs were the big thing of the moment and I
        decided to build a small page to provide templates for that, a few years
        later I started my bachelor degree in engineering and I learned the
        basics of software development, using C.
      </p>
      <br />
      <p>
        After I finished my degree I started my professional carrier, and it
        bothered me that simple tasks could be made easier and more efficient
        with proper software, so I started to develop small applications for the
        team, and the more I studied about software development the more I fell
        in love for the subject.
      </p>
      <br />
      <p>
        Now, after several years working in the oil {`&`} gas industry, I am
        ready to start a new carrier as a software developer.
      </p>
      <br />
    </Container>
  );
};

export default AboutMe;
