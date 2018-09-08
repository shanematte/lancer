import React, { Component } from 'react';
import { SessionToken } from 'utils/session';
import Auth from 'features/auth';

//styled components
import { MainBlock } from '../styled/auth';

export default class Welcome extends Component {
  componentWillMount = () => {
    if (SessionToken.get()) {
      window.location.href = '/dashboard/customer/';
    }
  }

  render() {
    return (
      <MainBlock>
        <Auth />
      </MainBlock>
    );
  }
}
