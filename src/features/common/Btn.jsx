import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { cssPanelGap } from 'features/common/Layout';

const cssBtn = css`
  display: block;
  width: 100%;
  height: 50px;

  color: #fff;
  font-family: ${p => p.theme.fontMain};
  font-size: 1rem;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;

  background: #377dff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 5px 8px 0 rgba(55, 125, 255, 0.4);
  transition: box-shadow 0.2s;

  &:hover {
    color: #fff;
    text-decoration: none;
    background: #3779f4;
    box-shadow: none;
    cursor: pointer;
  }
  &:active {
    background: #3779f4;
    box-shadow: inset 3px 5px 13px 0 rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }

  ${p => p.css};
`;

export default styled.button.attrs({ type: 'button' })`
  ${cssBtn};
`;
export const BtnLink = styled(Link)`
  ${cssBtn};
`;
export const BtnLinkPanel = styled(Link)`
  ${cssBtn};
  ${cssPanelGap};
`;
