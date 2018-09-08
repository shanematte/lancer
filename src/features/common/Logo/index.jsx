import React from 'react';
import styled from 'styled-components';

import svg from './logo.svg';


const Logo = styled.div`
  height: 70px;

  & img {
    height: 100%;
  }
`;

export default () => (
  <Logo>
    <img src={svg} alt="" />
  </Logo>
);
