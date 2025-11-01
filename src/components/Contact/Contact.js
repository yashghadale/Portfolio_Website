import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Container, Div1, SocialIcons } from './ContactStyles';

const Contact = () => (
  <Section nopadding id="contact">
     <br/>
    <SectionTitle>Contact</SectionTitle>
     
    <Container>
      <Div1>
        <SocialIcons 
          href="https://github.com/yashghadale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons 
          href="https://www.linkedin.com/in/yash-ghadale-956b051b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div1>
    </Container>
  </Section>
);

export default Contact;
