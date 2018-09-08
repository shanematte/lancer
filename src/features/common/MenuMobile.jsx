import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import { media } from './styles';


const MenuStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 10;
  user-select: none;

  ${media.sm`
    width: 50vw;
  `}
  ${media.md`
    width: 100%;
  `}
`;

const MenuBtnOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-right: 15px;
  cursor: pointer;
`;
const BtnText = styled.span`
  margin-right: 12px;
  font-family: ${p => p.theme.fontMain};
  font-weight: 300;

  ${media.md`
    border-bottom: 1px solid #ccc;
  `}
`;
const BtnIconOpen = styled.div`
  position: relative;
  height: 22px;
  width: 30px;

  &:before, b, &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: #ccc;
    border-radius: 10px;
  }
  & b {
    top: 50%;
    margin-top: -1px;
  }
  &:after {
    bottom: 0;
  }
`;

const Fader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,.2);

  ${media.md`
    position: absolute;
    top: 100%;
    height: 83px;
    width: 750px;
    box-shadow: 0 0 40px 0 rgba(0,0,0,.1);
  `}
`;

const MenuBtnClose = styled(MenuBtnOpen)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background: #fff;

  ${media.md`
    box-shadow: 0 0 40px 0 rgba(0,0,0,.1);
  `}

  & ${BtnText} {
    border: none;
  }
`;
const BtnIconClose = styled.div`
  position: relative;
  height: 22px;
  width: 30px;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #ccc;
    border-radius: 10px;

    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
const MenuContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 100px 15px 30px;
  background: #fff;

  ${media.md`
    display: flex;
    justify-content: center;
    top: 100%;
    height: 83px;
    width: 750px;
    padding: 0;
    z-index: 1;
  `}
`;
const NavItem = styled(NavLink)`
  display: block;
  padding: 0 20px;

  color: ${p => p.theme.colorPale};
  font-family: ${p => p.theme.fontMain};
  font-weight: bold;
  line-height: 49px;
  border-top: 1px solid #efefef;

  ${media.md`
    display: flex;
    align-items: center;
    height: 83px;
    border-top: none;
    border-bottom: 3px solid transparent;
  `}

  &.active {
    color: ${p => p.theme.colorMain};
    border-bottom-color: ${p => p.theme.colorActive};
  }
  & span {
    display: inline-block;
    line-height: 20px;
    border-bottom: 1px solid;
  }
  &.active span {
    border-bottom-color: transparent;
  }
`;

class Menu extends Component {
  state = { isOpened: false }

  openMenu = () => this.setState({ isOpened: true });
  closeMenu = () => this.setState({ isOpened: false });

  render() {
    return (
      <Fragment>
        {this.props.theme.isMobile ?
          <MenuStyled>
            <MenuBtnOpen onClick={this.openMenu}>
              <BtnText>Open menu</BtnText>
              <BtnIconOpen><b /></BtnIconOpen>
            </MenuBtnOpen>

            {this.state.isOpened && (
              <Fragment>
                <Fader onClick={this.closeMenu} />

                <MenuContent onClick={this.closeMenu}>
                  {this.props.navLinks.map((link, i) => (
                    <NavItem to={link.url} activeClassName="active" key={i}>
                      <span>{link.name}</span>
                    </NavItem>
                  ))}
                </MenuContent>
                <MenuBtnClose onClick={this.closeMenu}>
                  <BtnText>Close menu</BtnText>
                  <BtnIconClose />
                </MenuBtnClose>
              </Fragment>
            )}
          </MenuStyled>
          : null
        }
      </Fragment>
    );
  }
}

export default withTheme(Menu);
