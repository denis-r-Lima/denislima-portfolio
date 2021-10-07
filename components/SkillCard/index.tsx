import React from "react";
import { MdDevices } from "react-icons/md";
import { DiDatabase } from "react-icons/di";

import { Container, Card } from "./styles";

import { BACK_END_SKILLS, FRONT_END_SKILLS } from "./utils";

const SkillCard: React.FC = () => {
  return (
    <Container>
      <Card className="front Card">
        <h1>
          <MdDevices color="#275DAD" />
        </h1>
        <h2>Front-end Developer</h2>
        <p>
          I like to build apps from scratch and enjoy seeing ideas becoming
          reality.
        </p>
        <br />
        <br />
        <h3>Technologies</h3>
        <br />
        <ul>
          {FRONT_END_SKILLS.map((skill) => (
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
        <h2>Back-end Developer</h2>
        <p>
          I value a simple and well-built back-end on which the front end can
          rely.
        </p>
        <br />
        <br />
        <h3>Technologies</h3>
        <br />
        <ul>
          {BACK_END_SKILLS.map((skill) => (
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
