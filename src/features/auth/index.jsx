import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TwitterLogin from 'react-twitter-auth';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import Login from './login';
import Registration from './registration';
import { OAuthLogin, clearError } from './ducks/actions';

//styled components
import { 
  MainBlock,
  AuthBlock
} from '../styled/auth';


class RestTwitterLogin extends TwitterLogin {
  requestToken = {}

  getRequestToken() {
    const popup = this.openPopup();

    return window.fetch(this.props.requestTokenUrl, {
      method: 'POST',
      credentials: this.props.credentials,
      headers: this.getHeaders(),
    }).then(response => response.json()).then(data => {
      this.requestToken = data;
      popup.location = `https://api.twitter.com/oauth/authenticate?oauth_token=${data.oauth_token}`;
      this.polling(popup);
    }).catch(error => {
      popup.close();
      return this.props.onFailure(error);
    });
  }

  getOauthToken(oAuthVerifier, oauthToken) {
    const that = this;
    return window.fetch(`${this.props.loginUrl}?oauth_verifier=${oAuthVerifier}`, {
      method: 'POST',
      body: JSON.stringify({
        oauth_token: that.requestToken.oauth_token,
        oauth_token_secret: that.requestToken.oauth_token_secret,
      }),
      credentials: this.props.credentials,
      headers: this.getHeaders(),
    }).then(response => response.json()).then(response => {
      this.props.onSuccess(response);
    }).catch(error => this.props.onFailure(error));
  }
}


class Auth extends React.Component {
  state = {
    showModal: true,
    page: 'login',
    registrationModal: '',
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  googleFail = (oauth) => {
    console.log(oauth);
  }

  googleSuccess = (oauth) => {
    this.props.OAuthLogin('google', {
      access_token: oauth.accessToken,
    });
  }

  facebookSuccess = (oauth) => {
    this.props.OAuthLogin('facebook', {
      access_token: oauth.accessToken,
    });
  }

  twitterAnything = (response) => {
    this.props.OAuthLogin('twitter', response);
  }

  componentWillReceiveProps = (props) => {
    this.setState({ page: props.page });
  }

  render() {
    return (
      <AuthBlock>
            {
              (this.state.page === 'login') ?
                <p className="login__header">
                  <span
                    className="login__switcher"
                    onClick={() => {
                      this.props.clearError();
                      this.setState({
                        page: 'registration',
                      });
                    }}
                  >Register
                  </span>&nbsp;or&nbsp;
                  <label className="login__switcher login__switcher_active">login</label>
                </p> :
                <p className="login__header">
                  <label
                    className="login__switcher login__switcher_active"
                  >Register
                  </label>&nbsp;or&nbsp;
                  <span
                    className="login__switcher"
                    onClick={() => {
                      this.props.clearError();
                      this.setState({
                        page: 'login',
                      });
                    }}
                  >login
                  </span>
                </p>}
            {
              (this.state.page === 'login') ?
                <Login className="login__form" /> :
                (this.state.page === 'registration') ?
                  <Registration
                    className="login__form"
                  /> :
                  <div>
                Check your mailbox
                  </div>
            }
            <div className="login__social">
              <p>Or use</p>
              <FacebookLogin
                appId="2048821185357454"
                autoLoad={false}
                cssClass="login__social-item login__social-item_fb"
                textButton=""
                fields="email"
                onClick={(e) => {
                }}
                callback={this.facebookSuccess}
              />
              <RestTwitterLogin
                loginUrl="https://dev.lancer.network/api/auth/social/twitter/"
                onFailure={this.twitterAnything}
                onSuccess={this.twitterAnything}
                requestTokenUrl="https://dev.lancer.network/api/auth/social/twitter/token/"
                className="login__social-item login__social-item_tw"
                text=""
                showIcon={false}
                tag="a"
              />
              <GoogleLogin
                clientId="253304050915-aksopi7jnumfh6o56c4rlam8s618usfq.apps.googleusercontent.com"
                onSuccess={this.googleSuccess}
                onFailure={this.googleFail}
                className="login__social-item login__social-item_gl"
                buttonText=""
                tag="a"
                type="a"
              />
            </div>

            <div className="login__line" />
            {
              (this.state.page === 'registration') ?
                <p className="login__text">
                I`m already have an account.&nbsp;
                  <label
                    className="login__link"
                    onClick={() => {
                      this.props.clearError();
                      this.setState({
                        page: 'login',
                      });
                    }}
                  >Login
                  </label>
                </p> :
                <p className="login__text">
                I don't have account yet.&nbsp;
                  <label
                    className="login__link"
                    onClick={() => {
                      this.props.clearError();
                      this.setState({
                        page: 'registration',
                      });
                    }}
                  >Register
                  </label>
                </p>
            }
      </AuthBlock>
    );
  }
}

const mapStateToProps = state => ({
  page: state.auth.page,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  OAuthLogin,
  clearError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
