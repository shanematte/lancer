import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { getUserData } from 'features/user/ducks/actions';
import { withdraw } from 'features/currency/ducks/actions';
import Currency from 'features/currency';
import _ from 'underscore'
import { BodyContainer } from 'features/common/Container';

import Rating from './rating'
import Average from './average'
import Total from './total'
import Closed from './closed'

//styled
import {
  Title,
  BlockProfile,
  ProfileSection,
  ProfileHeadLinks,
  AvatarBlock,
  Image,
  SectionRightBlock,
  ListInformation,
  SectionAvatarBlock,
  SectionContentBlock,
  ProfileTopSection,
  LinkTitle,
  TextTop,
  TextNickname,
  SectionUserBlock
} from '../styled/profile'

class Profile extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }

  constructor(props){
    super(props)

    this.state = {
      wallets:{
        ETH:0,
        BTC:0
      }
    }
  }

  componentWillMount() {
    this.props.getUserData();
  }

  render() {
    const user = this.props.user;

    return (
      <BlockProfile>
        <BodyContainer>
          <ProfileTopSection>
           <big>Profile</big>
           <ProfileHeadLinks>
              <Link to="/operations/">financial operations</Link>
              <Link to="/messages/">messages</Link> 
           </ProfileHeadLinks>
          </ProfileTopSection>

          <ProfileSection>

            <SectionAvatarBlock>
              { user.avatar ? <img src={user.avatar} /> : '' }
            </SectionAvatarBlock>

            <SectionContentBlock>
              
              <SectionUserBlock>
                <TextNickname>{ user.username }</TextNickname>
                <Link to="/profile/edit/">
                  <Image src={require('../../assets/img/settings.png')} />
                </Link>
              </SectionUserBlock>

              <SectionRightBlock>
                
                <ListInformation>

                  <SectionRightBlock>
                    <TextTop>wallet</TextTop>
                    <Currency isIcon={false} />
                    <LinkTitle>
                      <Link to="#">Funds out</Link>
                    </LinkTitle>
                  </SectionRightBlock>

                  <Rating rating="5" />

                  <Average average="4.7"/>

                  <Total total="25" />

                  <Closed closed="20" />

                </ListInformation>

              </SectionRightBlock>

            </SectionContentBlock>

          </ProfileSection>


        </BodyContainer>
      </BlockProfile>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  wallet: state.currency.wallet,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserData,
      withdraw,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
