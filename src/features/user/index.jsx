import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dropdown, { DropdownTrigger, DropdownContent } from 'features/common/Dropdown';
import Logout from 'features/auth/logout';
import { getUserData } from 'features/user/ducks/actions';
import defaultAvatar from './avatar.png';

import {
  IconProfile
} from '../styled/user'

class User extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }

  constructor(props){
    super(props)

    this.state = {
      statusDrop:false
    }
  }

  componentWillMount() {
    this.props.getUserData();


  }

  handleLinkClick(){
    console.log(this.refs.dropdown)
    this.setState({
      statusDrop:!this.state.statusDrop
    })
    this.props.statusChangeProfileMenu()
  }

  render() {
    const { username, avatar, statusProfileMenu } = this.props;
    let { statusDrop } = this.state

    console.log(this.props)

    return (
      <Dropdown ref="dropdown" className={'profile'} >
        <DropdownTrigger className="profile__item profile__item_selected" onClick={this.handleLinkClick.bind(this)}>
          <span className="profile__notice">780</span>
          <img className="profile__photo" src={avatar != null ? avatar : defaultAvatar} alt="" />
          <p className="profile__name">{username}</p>
        </DropdownTrigger>
        <DropdownContent className="profile__list">
          <div className="profile__item">
            <Link onClick={() => {
              this.handleLinkClick()
              this.refs.dropdown.hide()
            }} to="/profile/info/">Open profile</Link>
            <IconProfile src={require('../../assets/img/user.png')} />
          </div>
          <div className="profile__item">
            <a href="#">Messages</a>
            <span className="profile__icon profile__icon_2">13</span>
          </div>
          <div className="profile__item">
            <Logout />
            <IconProfile src={require('../../assets/img/exit.png')} />
          </div>
        </DropdownContent>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  email: state.user.email,
  avatar: state.user.avatar,
  statusProfileMenu:state.user.statusProfileMenu
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserData,
      statusChangeProfileMenu: () => {
        dispatch({
          type:'STATUS_PROFILE_MENU'
        })
      }
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(User);
