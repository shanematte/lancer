import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registration, clearError } from '../ducks/actions';

//styled
import {
  Input,
  Button
} from '../../styled/auth'

class Registration extends Component {
  static propTypes = {
    invalid: PropTypes.bool,
    clearError: PropTypes.func,
    userLogin: PropTypes.func,
  }

  state = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    customUsername: false,
  }

  render() {
    const {
        email, username, password1, password2,
      } = this.state,
      errors = this.props.errors;
    return (
      <div>
        <form
          className="login__form"
          onSubmit={(e) => {
            this.props.registration(username, email, password1, password2);
            e.preventDefault();
          }}
        >
          <Input
            required={email}
            placeholder="Email"
            onChange={(e) => {
              const state = { email: e.target.value };
              if (!this.state.customUsername) {
                state.username = e.target.value.split('@')[0];
              }
              this.setState(state);
              this.props.clearError();
            }}
          />
          <span
            className="login__error"
            style={errors.email ? { display: 'block' } : {}}
          >{errors.email}
          </span>

          <Input
            required
            value={username}
            placeholder="Username"
            onChange={(e) => {
              this.setState({ customUsername: true, username: e.target.value });
              this.props.clearError();
            }}
          />

          <span
            className="login__error"
            style={errors.username ? { display: 'block' } : {}}
          >{errors.username}
          </span>

          <Input
            required
            value={password1}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              this.setState({ password1: e.target.value });
              this.props.clearError();
            }}
          />

          <span
            className="login__error"
            style={errors.password1 ? { display: 'block' } : {}}
          >{errors.password1}
          </span>

          <Input
            required
            value={password2}
            type="password"
            placeholder="Password confirm"
            onChange={(e) => {
              this.setState({ password2: e.target.value });
              this.props.clearError();
            }}
          />
          <span
            className="login__error"
            style={errors.password2 ? { display: 'block' } : {}}
          >{errors.password2}
          </span>

          <span
            className="login__error"
            style={errors.non_field_errors ? { display: 'block' } : {}}
          >{errors.non_field_errors}
          </span>

          <Button
            type="submit"
            value="Registration"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  type: state.auth.type,
  errors: state.auth.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  registration,
  clearError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
