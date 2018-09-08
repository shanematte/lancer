import styled from 'styled-components';

import { media } from './styles';

export const VisibleMobile = styled.div`
  ${media.lg`
    display: none;
  `}
`;
