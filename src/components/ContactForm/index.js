import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import {
  FormWrapper,
  InputWrapper,
  FormFieldWrapper,
  FormFieldLabel,
  StyledErrorMessage,
  FormButtonWrapper,
  ResponseStatusWrapper,
  ResponseStatus,
} from './ContactForm';
import { SubmitButton as Button } from '../Button';

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
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          setSubmitting(true);
          axios({
            method: 'POST',
            url: 'https://formspree.io/f/xyyozobw',
            data: values,
          })
            .then((response) => {   
              console.log('Response:', response);
              if(response.status === 200) setStatus('Success!');
            })
            .catch((error) => {
              setStatus('Oops, something went wrong:', error.status);
            });
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid, status }) => (
            <FormWrapper>
              <Form>
                <InputWrapper>
                  <FormFieldWrapper>
                    <FormFieldLabel htmlFor='firstname'>First Name</FormFieldLabel>
                    <Field as='input' type='text' name='firstname' />
                  </FormFieldWrapper>
                  <FormFieldWrapper>
                    <FormFieldLabel htmlFor='lastname'>Last Name</FormFieldLabel>
                    <Field as='input' type='text' name='lastname' />
                  </FormFieldWrapper>
                </InputWrapper>
                <InputWrapper>
                  <FormFieldWrapper>
                    <FormFieldLabel htmlFor='email'>Email*</FormFieldLabel>
                    <Field as='input' type='email' name='email' />
                    <StyledErrorMessage name='email' component='div' />
                  </FormFieldWrapper>
                </InputWrapper>
                <InputWrapper>
                  <FormFieldWrapper>
                    <FormFieldLabel htmlFor='subject'>Subject</FormFieldLabel>
                    <Field as='input' type='text' name='subject' />
                  </FormFieldWrapper>
                </InputWrapper>
                <InputWrapper>
                  <FormFieldWrapper>
                    <FormFieldLabel htmlFor='message'>Message</FormFieldLabel>
                    <Field as='textarea' rows={5} name='message' />
                  </FormFieldWrapper>
                </InputWrapper>
                <FormButtonWrapper>
                  <Button disabled={!isValid || isSubmitting}>Submit</Button>
                </FormButtonWrapper>
                </Form>
                <ResponseStatusWrapper>
                  <ResponseStatus green={status === 'Success!' && true}>{status ? status : ''}</ResponseStatus>
                </ResponseStatusWrapper>
            </FormWrapper> 
        )}
      </Formik>
    </>
  )
}

export default ContactForm;
