import styled, { css } from 'styled-components';

import { media } from './styles';


export const Wrapper = styled.div`
  display: flex;
  margin: 30px 0 100px;
`;
export const Section = styled.section`
  flex-grow: 1;
`;
export const Sidebar = styled.aside`
  display: none;
  padding-left: 30px;
  width: 300px;

  ${media.lg`
    display: block;
  `}
`;

export const cssPanelGap = css`
  margin-top: 20px;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`;
export const Panel = styled.div`
  ${cssPanelGap}
  padding: 25px 30px 30px;
  background: #fff;
  border-radius: 8px;
`;
export const PanelNarrow = styled(Panel)`
  ${cssPanelGap}
  padding: 16px 30px;
`;
