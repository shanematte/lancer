import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Input from 'features/common/Input';
import { IconSearch } from 'features/common/icons';
import { cssPanelGap } from 'features/common/Layout';


class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.setFilter(this.state.search);
    }
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <Fragment>
        <Input
          type="search"
          placeholder="Search something"
          onKeyDown={this.onKeyDown}
          value={this.state.search}
          onInput={this.handleInput}
        />
        <IconSearch />
      </Fragment>
    );
  }
}


const InputBlock = styled.div`
  ${cssPanelGap};
  color: ${p => p.theme.colorMain};
  position: relative;

  & input {
    border: 0;
  }
  & input::placeholder {
    font-style: italic;
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 20px;
    height: 16px;
    margin-top: -8px;
  }
`;
export default props => (
  <InputBlock>
    <SearchField {...props} />
  </InputBlock>
);


const InputPanel = styled(InputBlock)`
  ${cssPanelGap};
`;
export const SearchPanel = props => (
  <InputPanel>
    <SearchField {...props} />
  </InputPanel>
);
