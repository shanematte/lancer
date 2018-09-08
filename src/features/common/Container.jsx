import styled from 'styled-components';

import { media } from './styles';


const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  ${media.lg`
    max-width: ${p => p.theme.media.lg - 30}px;
  `}
`;
export default Container;

export const BodyContainer = styled(Container)`
  flex-grow: 1;
  padding: 0;

  ${media.md`
    padding: 0;
  `};

  ${media.xs`
    padding: 0 15px;
  `};
`;

export const TaskContainer = styled.div`
  flex-grow: 1;
  padding: 0;

  ${media.md`
    padding: 0;
  `};

  ${media.xs`
    padding: 0 15px;
  `};

  ${media.lg`
    padding: 0;
  `}
`
