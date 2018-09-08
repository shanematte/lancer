import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & .body-container {
    flex-grow: 1;
  }
`;

export default (props) => (
  <Wrap>{props.children}</Wrap>
);
