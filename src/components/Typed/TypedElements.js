import styled from 'styled-components';

export const TypedWrapper = styled.div`
  display: flex;
  justify-content: center;

  .Typewriter {
    display: flex;
    font-size: 2em;
  }

  .Typewriter__cursor {
    display: ${props => props.finished ? 'none' : 'block'};
    margin: auto 0;
  }
`;