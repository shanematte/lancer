import React from 'react';
import { css } from 'styled-components';
import arrowDown from './arrow_down.svg';

export const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
    <path fill="currentColor" d="M447 428L337 318a192 192 0 1 0-19 19l110 110c3 3 6 4 10 4s6-1 9-4c5-5 5-14 0-19zM27 192a165 165 0 1 1 331 1 165 165 0 0 1-331-1z" />
  </svg>
);

// temp shit
export const cssIconSelect = css`
  background: url(${arrowDown}) no-repeat right center;
  background-size: 10px;
`;
