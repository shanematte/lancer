import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userLogin, clearError, OAuthLogin } from '../ducks/actions';

//styled
import {
  Input,
  Button
} from '../../styled/auth'

class UserAuth extends Component {
  static propTypes = {
    invalid: PropTypes.bool,
    clearError: PropTypes.func,
    userLogin: PropTypes.func,
  }

  state = {
    login: '',
    password: '',
  }

  render() {
    const { login, password } = this.state,
      errors = this.props.errors;
    return (
      <div>
        <form className="login__form" onSubmit={(e) => { this.props.userLogin(login, password); e.preventDefault(); }}>
          <Input
            required
            value={login}
            placeholder="E-mail or login"
            onChange={(e) => { this.setState({ login: e.target.value }); this.props.clearError(); }}
            ref={(input) => { this.loginInput = input; }}
          />
          <span
            className="login__error"
            style={errors.email ? { display: 'block' } : {}}
          >{errors.email}
          </span>

          <span
            className="login__error"
            style={errors.non_field_errors ? { display: 'block' } : {}}
          >{errors.non_field_errors}
          </span>

          <Input
            required
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => { this.setState({ password: e.target.value }); this.props.clearError(); }}
            ref={(input) => { this.passwordInput = input; }}
          />
          <span
            className="login__error"
            style={errors.password ? { display: 'block' } : {}}
          >{errors.password}
          </span>

          <Button type="submit" value="LOGIN" disabled={!(password && login)} />

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invalid: state.auth.invalid,
  errors: state.auth.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin,
  clearError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserAuth));
