import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I’m a Frontend Engineer passionate about building modern, responsive, 
        and intelligent web applications. I specialize in React and JavaScript, 
        developing efficient and scalable solutions for real-time dashboards, 
        AI-based systems, and interactive digital experiences.
      </SectionText>

      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
