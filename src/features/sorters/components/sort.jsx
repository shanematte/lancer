import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  font-family: ${p => p.theme.fontMain};
  user-select: none;
`;
const Label = styled.div`
  margin-right: 20px;
  color: ${p => p.theme.colorMain};
`;
const Switcher = styled.div`
  margin-right: 20px;
  color: #1B7BB5;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.asc:after,
  &.desc:after {
    content: '';
    display: inline-block;
    margin-left: 5px;
    vertical-align: middle;
    border: 5px solid;
    border-right-color: transparent;
    border-left-color: transparent;
  }
  &.asc:after {
    border-top: none;
  }
  &.desc:after {
    border-bottom: none;
  }
`;

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'published_at',
      type: 'desc',
    };
  }

  handleClick = (newActive) => {
    const active = newActive;
    let field = active;
    if (this.state.active === active) {
      if (this.state.type === 'desc') {
        this.setState({ type: 'asc' });
      } else {
        this.setState({ type: 'desc' });
        field = `-${field}`;
      }
    } else {
      this.setState({ active });
      field = `-${field}`;
    }
    this.props.setFilter(field);
  }

  render() {
    return (
      <Wrapper>
        <Label>Sort by:</Label>
        <Switcher
          className={this.state.active === 'published_at' && this.state.type}
          onClick={() => this.handleClick(this.props.dateField || 'published_at')}
        >
        Date
        </Switcher>
        <Switcher
          className={this.state.active === 'price' && this.state.type}
          onClick={() => this.handleClick('price')}
        >
          Price
        </Switcher>
      </Wrapper>
    );
  }
}
