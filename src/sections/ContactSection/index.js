import React from 'react';

import Section from './../../components/Section';
import Column from './../../components/Column';
import Card from './../../components/Card';
import SectionHeading from '../../components/SectionHeading';
import ContactForm from './../../components/ContactForm';
import {
  ContactWrapper,
  ContactSectionWrapper,
} from './ContactSectionElements';


const ContactSection = () => {
  return (
    <>
      <ContactWrapper>
        <Section id='contact'>
          <ContactSectionWrapper>
            <Column>
              <Card>
                <SectionHeading delay={100}>Contact Me</SectionHeading>
                <ContactForm />
              </Card>
            </Column>
          </ContactSectionWrapper>
        </Section>
      </ContactWrapper>
    </>
  )
}

export default ContactSection;
