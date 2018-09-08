import styled from 'styled-components';

import { media } from 'features/common/styles';

export default styled.h1`
  margin: 30px 0 0;
  color: #727272;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;

  & big {
    display: block;
    color: ${p => p.theme.colorMain};
    font-family: ${p => p.theme.fontMain};
    font-size: 32px;
    line-height: 40px;
  }

  ${media.md`
    & big {
      display: inline;
    }
  `};
  ${media.lg`
    font-size: 16px;

    & big {
      font-size: 40px;
    }
  `};
`;
