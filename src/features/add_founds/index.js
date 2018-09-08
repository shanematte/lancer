import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import { editUser, getUserData } from 'features/user/ducks/actions';
import { BtnLinkPanel } from 'features/common/Btn';
import axios from 'axios'

import {
  FlexBlock,
  WalletsBlock,
  WalletsBlockContent,
  WalletsBlockContentInfo,
  WalletsBlockContentLeft,
  WalletsBlockContentRight,
  WalletsBlockContentInfoWallet,
  WalletsBlockContentInfoWalletLeft,
  WalletsFormBlock,
  WalletQRImage,
  WalletsFormBlockEtherium
} from '../styled/add-founds'

class AddFounds extends Component {

  constructor(props){
    super(props)

    this.state = {
      bitcoin:'1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee',
      etherium:'0xca30e63200a0fe3182dc61fc5605efc41456f32'
    }
  }

  copyText(walletTitle, wallet){

    if(walletTitle == 'BIT'){

      let bitInput = document.getElementById('WALLET_BIT')
      bitInput.select()
      document.execCommand('copy')

    }else{

      let bitInput = document.getElementById('WALLET_ETH')
      bitInput.select()
      document.execCommand('copy')

    }

  }

  render() {
    let { bitcoin, etherium } = this.state
    return (
      <FlexBlock>

        <h1>Add funds</h1>

        <WalletsBlock>
          
          <WalletsBlockContent>

            <WalletsBlockContentLeft>
                <WalletsBlockContentInfoWalletLeft>
                  <h2>Out bitcoin wallet</h2>
                  <p>received overcame oh sensible so at an. formed do change merely to county it. am separate contempt domestic to to ph</p>
                  <WalletsFormBlock>
                    <input ID="WALLET_BIT" value={ bitcoin }/>
                    <span onClick={this.copyText.bind(this, 'BIT', bitcoin)}>COPY</span>
                  </WalletsFormBlock>

                </WalletsBlockContentInfoWalletLeft>
                <WalletsBlockContentInfoWallet>
                  <WalletQRImage src={require('../../assets/img/bitcoin.png')}/>
                </WalletsBlockContentInfoWallet>
            </WalletsBlockContentLeft>

          </WalletsBlockContent>

          <WalletsBlockContent>

            <WalletsBlockContentRight>
                <WalletsBlockContentInfoWalletLeft>
                  <h2>Out etherium wallet</h2>
                  <p>received overcame oh sensible so at an. formed do change merely to county it. am separate contempt domestic to to ph</p>
                  <WalletsFormBlockEtherium>
                    <input ID="WALLET_ETH" value={ etherium }/>
                    <span onClick={this.copyText.bind(this, 'ETH', etherium)}>COPY</span>
                  </WalletsFormBlockEtherium>
                </WalletsBlockContentInfoWalletLeft>
                <WalletsBlockContentInfoWallet>
                  <WalletQRImage src={require('../../assets/img/etherium.png')}/>
                </WalletsBlockContentInfoWallet>
            </WalletsBlockContentRight>
          </WalletsBlockContent>

        </WalletsBlock>

      </FlexBlock>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  wallets: state.user.wallets,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddFounds));
