import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { media } from './styles';


const NavContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: auto;
  max-width: 400px;
  width: 100%;
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50%;
  padding: 0 15px;

  color: ${p => p.theme.colorPale};
  font-size: 14px;
  font-family: ${p => p.theme.fontMain};
  font-weight: 700;
  line-height: 20px;
  border-bottom: 3px solid transparent;

  ${media.sm`
    height: 67px;
    width: auto;
  `}
  ${media.md`
    height: 83px;
    width: auto;
  `}

  &:hover {
    color: ${p => p.theme.colorMain};
    text-decoration: none;
  }
  &.active {
    color: ${p => p.theme.colorMain};
    border-bottom-color: ${p => p.theme.colorActive};
  }
  & span {
    display: inline-block;
    border-bottom: 1px solid;
  }
  &.active span {
    border-bottom-color: transparent;
  }
`;

export default (props) => (
  <NavContent>
    {props.links.map((link, i) => (
      <NavItem to={link.url} activeClassName="active" key={i}>
        <span>{link.name}</span>
      </NavItem>
    ))}
  </NavContent>
);
