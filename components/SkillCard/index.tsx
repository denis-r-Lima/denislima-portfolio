import React from 'react';
import { MdDevices } from 'react-icons/md' 
import { DiDatabase } from 'react-icons/di'

import { Container , Card } from './styles';

const SkillCard: React.FC = () => {
  return (
      <Container>
          <Card>
            <h1>
            <MdDevices color="#275DAD" />
            </h1>
            <h2>Front-end Devoloper</h2>
            <p>I like to build apps from scratch, and enjoy seeing ideas becoming reality.</p>
            <br/>
            <br/>
            <h3>Technologies</h3>
            <br/>
            <ul>
              <li><p>HTML</p></li>
              <li><p>CSS</p></li>
              <li><p>JavaScript</p></li>
              <li><p>TypeScript</p></li>
              <li><p>React</p></li>
              <li><p>React Native</p></li>
              <li><p>Electron</p></li>
              <li><p>Git</p></li>
            </ul>
            </Card>
          <Card>
          <h1>
            <DiDatabase color="#275DAD" />
            </h1>
            <h2>Back-end Devoloper</h2>
            <p>I value simple and well built back end in which the front-end can relly on.</p>
            <br/>
            <br/>
            <h3>Technologies</h3>
            <br/>
            <ul>
              <li><p>Node.js</p></li>
              <li><p>REST API</p></li>
              <li><p>SQL</p></li>
              <li><p>MongoDB</p></li>
              <li><p>GraphQL</p></li>
            </ul>
          </Card>
      </Container>
  );
}

export default SkillCard;