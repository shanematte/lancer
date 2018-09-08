import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { editWallet } from 'features/user/ducks/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  BitFormContainer,
  BitFormContent,
  EditEth,
  EditBit
} from '../styled/edit-profile'

class WalletForm extends Component {
  static propTypes = {
    walet: PropTypes.object,
    editWallet: PropTypes.func,
  }

  state = {
    address_for_credit: this.props.wallet.address_for_credit || '',
    address_for_withdraw: this.props.wallet.address_for_withdraw || '',
  }

  render() {
    const { address_for_credit, address_for_withdraw } = this.state;
    const { currency, id } = this.props.wallet;
    return (
      <BitFormContainer>
        <p>{currency} wallet</p>

        {/*<input
          onChange={(e) => {
            this.setState({ address_for_credit: e.target.value });
          }}
          value={address_for_credit}
        />*/}

        <BitFormContent>
          <input
            onChange={(e) => {
              this.setState({ address_for_withdraw: e.target.value });
            }}
            value={address_for_withdraw}
          />

          {
            currency == 'ETH' ?
              <EditEth onClick={() => this.props.editWallet(id, this.state)}>EDIT</EditEth>
            :
              <EditBit onClick={() => this.props.editWallet(id, this.state)}>EDIT</EditBit>
          }

        </BitFormContent>
      </BitFormContainer>
    );
  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { editWallet },
    dispatch,
  );


export default connect(null, mapDispatchToProps)(WalletForm);
