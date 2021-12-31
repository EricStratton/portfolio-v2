import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5em;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    flex-direction: row;
    margin-bottom: 1em;
  }
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin: 0 1em;
    
    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  textarea {
    resize: none;
    padding-top: 0.5em;
  }
`;

export const FormFieldLabel = styled.label`
  margin-bottom: 0.5em;
`;

export const FormField = styled(Field)`
  flex: 1;
  border-radius: 10px;
  border: none;
  padding: 0 1em;
  margin-bottom: 1em;
  
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    margin-bottom: 0;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`

`

