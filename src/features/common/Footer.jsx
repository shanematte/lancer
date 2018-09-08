import React from 'react';
import styled, { withTheme } from 'styled-components';

import { media } from './styles';
import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';


const FooterWrap = styled.div`
  background: #fff;
  border-bottom: 4px solid #f5f5f5;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const borderColor = '#e8e8e8';
const Block = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  box-sizing: border-box;
  padding: 0 15px;
  width: 100%;

  background: #fff;
  border-bottom: 1px solid ${borderColor};

  ${media.md`
    height: 83px;
    width: auto;
    border-bottom-color: transparent;
    border-left: 1px solid ${borderColor};
  `}
`;
const BlockMenu = styled(Block)`
  order: 1;
  justify-content: flex-end;

  ${media.md`
    order: 2;
  `}
`;
const BlockLogo = styled(Block)`
  order: 2;
  justify-content: center;
  height: 100px;

  ${media.sm`
    justify-content: flex-start;
    width: 50%;
  `}
  ${media.md`
    order: 1;
    flex-grow: 0;
    height: auto;
    max-width: 180px;
    border-left: none;
  `}
  ${media.lg`
    padding-left: 0;
    width: 180px;
  `}
`;
const BlockCopyright = styled(Block)`
  order: 3;
  justify-content: center;
  height: 50px;

  ${media.sm`
    flex-direction: column;
    align-items: flex-end;
    height: auto;
    width: 50%;
  `}
  ${media.md`
    width: auto;
  `}
  ${media.lg`
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 300px;
    padding-right: 0;
  `}

  & span {
    display: inline-block;
    margin-left: 4px;
  }
`;


const Header = (props) => (
  <FooterWrap>
    <Container>
      <HeaderContent>
        <BlockMenu>
          <Nav links={props.navLinks} />
        </BlockMenu>
        <BlockLogo><Logo /></BlockLogo>
        <BlockCopyright>
          <span>LANCER NETWORK ©</span>
          <span>All rights reserved</span>
        </BlockCopyright>
      </HeaderContent>
    </Container>
  </FooterWrap>
);

export default withTheme(Header);
