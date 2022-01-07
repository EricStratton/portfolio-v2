import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const FormWrapper= styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
  }

  textarea,
  input {  
    flex: 1;
    border-radius: 10px;
    border: none;
    padding: 0 1em;
    margin-bottom: 1em;
    
    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: 0;
    }

    &:focus {
      border-bottom: 4px ${props => props.theme.colors.primary};
      outline: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
    overflow: hidden;
  }
`;

export const FormFieldLabel = styled.label`
  margin-bottom: 0.5em;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 1em;
  color: red;
`;

export const FormButtonWrapper = styled.div`
  display: block;
  
  button {
    display: block;
    margin: 0 auto;
  }
`;

