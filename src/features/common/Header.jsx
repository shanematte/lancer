import React from 'react';
import styled, { withTheme } from 'styled-components';

import User from 'features/user';
import Currency from 'features/currency';

import { media } from './styles';
import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import MenuMobile from './MenuMobile';


const HeaderWrap = styled.div`
  background: #fff;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.md`
    height: 83px;
  `}

  & .dropdown__content {
    top: 100%;
    margin: 0;
  }
`;


const borderColor = '#e8e8e8';
const Block = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  box-sizing: border-box;
  height: 80px;
  padding: 0 0;
  width: 50%;

  background: #fff;
  border-bottom: 1px solid ${borderColor};

  ${media.md`
    height: auto;
    width: auto;
    border-bottom-color: transparent;
    border-left: 1px solid ${borderColor};
  `}
`;
const BlockLogo = styled(Block)`
  order: 0;
  height: 100px;
  max-width: 110px;

  ${media.md`
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
const BlockMenu = styled(Block)`
  position:relative;
  z-index:1000000;
  justify-content: flex-end;
  height: auto;
  padding: 0;

  ${media.md`
    order: 4;
    max-width: 180px;
  `}
  ${media.lg`
    order: 1;
    max-width: none;
  `}
`;
const BlockWallet = styled(Block)`
  position:relative;
  z-index:10000;

  ${media.md`
    order: 1;
  `}

  & .wallet {
    height: 100%;
    min-width: auto;
    width: 100%;
    border: none;
  }
`;
const BlockUser = styled(Block)`
  position:relative;
  z-index:10000;
  padding: 0;

  ${media.sm`
    border-left: 1px solid ${borderColor};
  `}
  ${media.md`
    order: 3;
    height: auto;
  `}
  ${media.lg`
    padding-right: 0;
  `}

  & .profile {
    height: 100%;
    width: 100%;
  }
`;


const Header = props => (
  <HeaderWrap>
    <Container>
      <HeaderContent>
        <BlockLogo><Logo /></BlockLogo>
        <BlockMenu>
          {!props.theme.isMobile && <Nav links={props.navLinks} />}
          <MenuMobile navLinks={props.navLinks} />
        </BlockMenu>
        <BlockWallet><Currency isIcon /></BlockWallet>
        <BlockUser><User /></BlockUser>
      </HeaderContent>
    </Container>
  </HeaderWrap>
);

export default withTheme(Header);
