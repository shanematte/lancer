import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Btn from 'features/common/Btn';

import PriceRange from '../components/price';
import StatusChoice from '../components/status';


const Title = styled.strong`
  display: block;
  margin-bottom: 15px;
  font-family: ${p => p.theme.fontMain};
  font-size: 1.3rem;
  font-weight: 300;
`;
const cssBtn = css`
  margin-top: 20px;
  text-transform: none;
  background: #71a3ff;
`;


class CustomerFilter extends Component {
  state = {
    price_0: '',
    price_1: '',
    status: '',
    currency: '',
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  }

  emptyCheck = () => {
    const data = {};
    for (const el in this.state) {
      if (this.state.hasOwnProperty(el) && this.state[el]) {
        data[el] = this.state[el];
      }
    }
    return data;
  }

  send = () => {
    const data = this.emptyCheck();
    this.props.getSetterFilter(data);
  }

  render() {
    const { noStatus } = this.props;
    const { price_0, price_1 } = this.state;

    return (
      <div>
        <Title>Filter by</Title>
        { !noStatus && <StatusChoice setFilter={value => this.onChange(value, 'status')} /> }

        <PriceRange
          price_0={price_0}
          price_1={price_1}
          onChange={this.onChange}
        />

        <Btn onClick={this.send} css={cssBtn}>
          Show <b>{25}</b> tasks
        </Btn>
      </div>
    );
  }
}

CustomerFilter.propTypes = {
  getSetterFilter: PropTypes.func,
  noStatus: PropTypes.bool,
};

export default CustomerFilter;
