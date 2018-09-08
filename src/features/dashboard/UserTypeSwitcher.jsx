import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 50px;
  margin: 30px 0 0;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
`;
const Switcher = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-family: ${p => p.theme.fontMain};
  font-size: 16px;
  font-weight: 700;
  transition: background 0.2s;

  &:hover {
    color: ${p => p.theme.colorMain};
    text-decoration: none;
    background: #fff;
  }
  &.active {
    background: #fff;
  }
`;

export default (props) => (
  <Wrapper>
    <Switcher to={`${props.prefix}/customer/`} onClick={() => props.request(false)}>
      Customer
    </Switcher>
    <Switcher to={`${props.prefix}/lancer/`} onClick={() => props.request(true)}>
      Lancer
    </Switcher>
  </Wrapper>
);
