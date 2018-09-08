import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { editUser, getUserData } from 'features/user/ducks/actions';
import WalletForm from './walletForm';
import { BtnLinkPanel } from 'features/common/Btn';

import { BodyContainer, TaskContainer } from 'features/common/Container';

import {
  BlockEditProfile,
  BlockContent,
  BlockContentForm,
  BlockContentFormSection,
  BlockEditProfileHeader,
  BlockContentFormSectionLeft,
  BlockAvatarUser,
  AvatarUser,
  ButtonUser,
  ButtonLoadAvatar,
  ChangeBlockPassword,
  ChangeBlockPasswordSection,
  IconButton,
  MainHeadBlockEdit,
  ButtonEditSave
} from '../styled/edit-profile'

import { ajaxRequest, compileQuery } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';

class ProfileForm extends Component {
  static propTypes = {
    getUserData: PropTypes.func,
    editUser: PropTypes.func,
    user: PropTypes.object,
    wallets: PropTypes.array,
  }

  state = {
    username: this.props.user.username || '',
    email: this.props.user.email || '',
    old_password: '',
    new_password: '',
    avatar:null,
    files:[]
  }

  componentWillMount() {
    this.props.getUserData();
  }

  componentWillReceiveProps = newProps => {
    if (!isEqual(this.props, newProps)) {
      this.setState({
        username: newProps.user.username,
        email: newProps.user.email,
        wallets: newProps.wallets,
        avatar:newProps.user.avatar
      });
    }
  }

  getWallets = () => {
    return this.props.wallets.map((el, i) => (
      <WalletForm key={`walet-${i}`} wallet={el} />
    ))
  }

  onClick = () => {

    const {
      username, email, old_password, new_password, files, avatar
    } = this.state;

    this.props.editUser({
      username,
      email,
      passwords: { old_password, new_password },
    });
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  }

  loadAvatar(image){

    let that = this
    const avatar = new FormData()
    avatar.append('avatar', image[0])

    const tokenPrefix = 'Token'
    let newUrl = ''

    if (process.env.NODE_ENV === 'production') {
      newUrl = `https://api.lancer.network/user/`;
    } else {
      newUrl = `/api/user/`;
    }

    const _options = {
      method:'PATCH',
      body:avatar,
      cache: 'no-cache',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'form-data',
        Authorization:`${tokenPrefix} ${SessionToken.get()}`,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods' : 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
      },
    };


    fetch(newUrl, _options)
    .then(response => response.text().then(text => {
      let payload = text;

      if (response.headers.get('Content-Type') === 'application/json') {
        try {
          payload = JSON.parse(text);
        } catch (e) {
          console.warn('Can\'t parse response as JSON:', text);
          payload = text;
        }
      }

      return { response, payload }

    }))
    .then(({ response, payload }) => {
      if (!response.ok) {
        if (response.status === 401) {
          SessionToken.remove();
          push(authUrl);
        }
        return Promise.reject({
          status: response.status,
          ...payload,
        });
      }

      return Promise.resolve(payload);
    });

  }

  render() {
    
    const {
      username, email, old_password, new_password, avatar, files
    } = this.state;

    console.log(this.props.user)

    return (
      <BlockEditProfile>

        <MainHeadBlockEdit>
          <BodyContainer>
            <BlockEditProfileHeader>
              <big>Edit profile</big>
              <Link to="/profile/info/">cancel edit</Link>
            </BlockEditProfileHeader>
          </BodyContainer>
        </MainHeadBlockEdit>

        <BodyContainer>
          <BlockContent>

            <BlockContentForm>
              <BlockContentFormSectionLeft>
                <h5>Change image</h5>

                <BlockAvatarUser>


                  {
                    avatar ? <AvatarUser src={avatar} /> : <AvatarUser/>
                  }

                  <ButtonLoadAvatar>
                    <IconButton src={require('../../assets/img/load.png')}/>
                    <p>Load new image</p>
                    <input type="file" onChange={ e => this.loadAvatar(e.target.files)}/>
                  </ButtonLoadAvatar>

                  <ButtonUser>
                    <IconButton src={require('../../assets/img/trash.png')}/>
                    <p>Delete this image</p>
                  </ButtonUser>

                </BlockAvatarUser>

                <h5>Change personal information</h5>

                <p>Login</p>
                <input
                  onChange={e => this.onChange(e.target.value, 'username')}
                  onKeyPress={this.onKeyPress}
                  value={username}
                />
                <p>Email</p>
                <input
                  onChange={e => this.onChange(e.target.value, 'email')}
                  onKeyPress={this.onKeyPress}
                  value={email}
                />

                <h5>Change password</h5>

                <ChangeBlockPassword>
                  <ChangeBlockPasswordSection>
                    <p>Old password</p>
                    <input
                      type="password"
                      placeholder="Old password"
                      onChange={e => this.onChange(e.target.value, 'old_password')}
                      onKeyPress={this.onKeyPress}
                      value={old_password}
                    />
                  </ChangeBlockPasswordSection>
                  <ChangeBlockPasswordSection>
                    <p>New password</p>
                    <input
                      type="password"
                      placeholder="New password"
                      onChange={e => this.onChange(e.target.value, 'new_password')}
                      onKeyPress={this.onKeyPress}
                      value={new_password}
                    />
                  </ChangeBlockPasswordSection>
                </ChangeBlockPassword>
              </BlockContentFormSectionLeft>
              <BlockContentFormSection>
                <h5>Change wallet information</h5>
                {this.getWallets()}
              </BlockContentFormSection>
            </BlockContentForm>

            <ButtonEditSave onClick={this.onClick.bind(this)}>
              Save changes
            </ButtonEditSave>

          </BlockContent>
        </BodyContainer>

      </BlockEditProfile>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  wallets: state.user.wallets,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ editUser, getUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileForm));
