import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Welcome To <br/>
       My Personal Portfolio
      </SectionTitle>
      <SectionText>
       I’m a Frontend Engineer passionate about building modern, responsive, 
  and user-friendly web applications. I specialize in React, JavaScript, 
  and UI/UX design, turning ideas into interactive digital experiences.
      </SectionText>

      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;