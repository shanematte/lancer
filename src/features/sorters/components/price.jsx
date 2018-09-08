import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'features/common/Input';
import Select from 'features/common/Select';


const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
const PriceInput = styled(Input)`
  height: 40px;
  padding: 0 10px;
  width: 75px;
`;


const PriceRange = props => {
  const { price_0, price_1, onChange } = props;

  return (
    <div className="dashboard__categories-range">
      <Flex>
        <strong>Price range</strong>
        <Select onChange={e => onChange(e.target.value, 'currency')}>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="TK" >TK</option>
        </Select>
      </Flex>

      <Flex>
        <PriceInput
          className="input dashboard__range-input"
          type="text"
          placeholder="from"
          onInput={e => onChange(e.target.value, 'price_0')}
          value={price_0}
        />
        <span>—</span>
        <PriceInput
          className="input dashboard__range-input"
          type="text"
          placeholder="to"
          onInput={e => onChange(e.target.value, 'price_1')}
          value={price_1}
        />
      </Flex>
    </div>
  );
};

PriceRange.propTypes = {
  price_0: PropTypes.string,
  price_1: PropTypes.string,
  onChange: PropTypes.func,
};

export default PriceRange;
