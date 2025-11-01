import React from 'react';
import { 
  DiReact, DiHtml5, DiCss3, DiJsBadge, DiPython, DiGit, DiLinux, DiDatabase 
} from 'react-icons/di';
import { SiVscode, SiJupyter, SiFirebase } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  
  <Section id="tech">
    <br />
    <br />
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I enjoy building modern web applications and working with tools and technologies that make development efficient and scalable.
    </SectionText>

    <List>
      {/* Frontend */}
      <ListItem className="tech-item">
        <DiReact size="3rem" className="tech-icon" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React.js, HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Backend & Database */}
      <ListItem className="tech-item">
        <DiDatabase size="3rem" className="tech-icon" />
        <ListContainer>
          <ListTitle>Backend & Database</ListTitle>
          <ListParagraph>
            Node.js, SQL, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Languages */}
      <ListItem className="tech-item">
        <DiPython size="3rem" className="tech-icon" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python, C, C++
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Tools */}
      <ListItem className="tech-item">
        <DiGit size="3rem" className="tech-icon" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Git, VS Code, Jupyter Notebook, Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
