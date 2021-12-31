import React from 'react';
import { Formik } from 'formik';

import {
  StyledForm,
  FormWrapper,
  InputWrapper,
  FormFieldWrapper,
  FormFieldLabel,
  FormField,
} from './ContactFormElements';

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: '',
        }}
      >
        <StyledForm>
          <FormWrapper>
            <InputWrapper>
              <FormFieldWrapper>
                <FormFieldLabel htmlFor='firstname'>First Name</FormFieldLabel>
                <FormField as='input' type='text' name='firstname' />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <FormFieldLabel htmlFor='lastname'>Last Name</FormFieldLabel>
                <FormField as='input' type='text' name='lastname' />
              </FormFieldWrapper>
            </InputWrapper>
            <InputWrapper>
              <FormFieldWrapper>
                <FormFieldLabel htmlFor='email'>Email</FormFieldLabel>
                <FormField as='input' type='email' name='email' />
              </FormFieldWrapper>
            </InputWrapper>
            <InputWrapper>
              <FormFieldWrapper>
                <FormFieldLabel htmlFor='subject'>Subject</FormFieldLabel>
                <FormField as='input' type='text' name='subject' />
              </FormFieldWrapper>
            </InputWrapper>
            <InputWrapper>
              <FormFieldWrapper>
                <FormFieldLabel htmlFor='message'>Message</FormFieldLabel>
                <FormField as='textarea' rows={5} name='message' />
              </FormFieldWrapper>
            </InputWrapper>
          </FormWrapper>
        </StyledForm>
      </Formik>
    </>
  )
}

export default ContactForm;
