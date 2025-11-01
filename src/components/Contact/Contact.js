import React from 'react';
import { Section, SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Container, Form, FormGroup, Label, Input, TextArea, Button } from './ContactStyles';

const Contact = () => (
  <Section nopadding id="contact" style={{ paddingTop: '20px' }}>
      <SectionDivider />
      <br/>
      <br/>
      
    <SectionTitle>Contact</SectionTitle>
    <SectionText>
      Please contact me directly at <b>yashghadale511@gmail.com</b> or through this form.
    </SectionText>

    <Container>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" rows="5" placeholder="Enter your message" />
        </FormGroup>

        <Button type="submit">Send</Button>
      </Form>
    </Container>
  </Section>
);

export default Contact;
