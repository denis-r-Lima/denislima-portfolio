import React from "react";
import { MdDevices } from "react-icons/md";
import { DiDatabase } from "react-icons/di";

import { Container, Card } from "./styles";

type SkillCardProps = {
  content: ContentType;
};

const SkillCard: React.FC<SkillCardProps> = ({ content }) => {
  const { backEnd, frontEnd } = content;

  return (
    <Container>
      <Card className="front Card">
        <h1>
          <MdDevices color="#275DAD" />
        </h1>
        <h2>{frontEnd?.title}</h2>
        <p>{frontEnd?.description}</p>
        <br />
        <br />
        <h3>Technologies</h3>
        <br />
        <ul>
          {frontEnd?.technologies.map((skill) => (
            <li key={skill}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="back Card">
        <h1>
          <DiDatabase color="#275DAD" />
        </h1>
        <h2>{backEnd?.title}</h2>
        <p>{backEnd?.description}</p>
        <br />
        <br />
        <h3>Technologies</h3>
        <br />
        <ul>
          {backEnd?.technologies.map((skill) => (
            <li key={skill}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default SkillCard;
