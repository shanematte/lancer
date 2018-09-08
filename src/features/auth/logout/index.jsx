import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../ducks/actions';


class Logout extends Component {
  render() {
    return (
      <a onClick={this.props.userLogout}>
        Log out
      </a>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout,
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
