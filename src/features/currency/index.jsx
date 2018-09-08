import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Dropdown, { DropdownTrigger, DropdownContent } from 'features/common/Dropdown';
import { setWallet } from './ducks/actions';

import {
  ImageWallet
} from '../styled/currency'

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.wallet || this.props.wallets[0] ||
        {
          balance: '',
          currency: '',
        },
    };
  }

  componentWillReceiveProps(newProps) {
    if (isEmpty(newProps.wallet)) {
      const wallet = newProps.wallets[0] || {};
      this.props.setWallet(wallet);
    } else {
      this.setState({ active: newProps.wallet });
    }
  }

  handleLinkClick = (elem) => {
    // this.refs.dropdown.hide();  // generates errors
    this.props.setWallet(elem);
  }

  render() {

    let { isIcon } = this.props

    return (
      <Dropdown ref="dropdown" className="wallet__item_block">
        <DropdownTrigger className="wallet__item wallet__item_selected">

          {
            isIcon ? <ImageWallet src={require('../../assets/img/btc.png')} /> : ''
          }

          { this.state.active.balance.substring(0, this.state.active.balance.length - 3) }&nbsp;
          <span className="wallet__curency">{this.state.active.currency }</span>
        </DropdownTrigger>
        <DropdownContent style={{marginLeft: '-15px',width: '100%'}} className="wallet__list">
          {this.props.wallets.map((elem, i) => (
            this.state.active.currency === elem.currency ?
              null :
              <div className="wallet__item" key={i} onClick={() => this.handleLinkClick(elem)}>
                <ImageWallet src={require('../../assets/img/btc.png')} />
                { elem.balance.substring(0, elem.balance.length - 3)}&nbsp;<span className="wallet__curency">{ elem.currency}</span>
              </div>
          ))}

          <Link className="btn wallet__btn" to="/add-funds/">
            add funds
          </Link>
          <Link className="wallet__link" to="/profile/operations/">
            <p>Financial&nbsp;operations</p>
          </Link>
        </DropdownContent>
      </Dropdown>
    );
  }
}


const mapStateToProps = state => ({
  wallets: state.user.wallets,
  wallet: state.currency.wallet,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  setWallet,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Currency);
