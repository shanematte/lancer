import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Customer from 'features/customer';
import Profile from 'features/profile';
import { getTasksData, cleanTasks } from 'features/tasks/ducks/actions';

import { BodyContainer } from 'features/common/Container';

import Heading from './Heading';
import UserTypeSwitcher from './UserTypeSwitcher';

class TaskList extends Component {
  static propTypes = {
    getTasksData: PropTypes.func,
    isLancer: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      isShowArchived: false,
    };
  }

  componentWillMount = () => {
    this.requestData();
  }

  getPath = (isLancer = this.props.isLancer) => `${isLancer ? 'actions' : 'tasks'}/my/`

  getSetterFilter = name => (value) => {
    const { filters } = this.state;
    filters[name] = value;
    this.props.cleanTasks();
    this.props.getTasksData(this.getPath(), 1, filters);
    this.setState({ filters });
  }

  getSetterCustomerFilter = (value) => {
    this.props.cleanTasks();
    this.props.getTasksData(this.getPath(), 1, value);
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        ...value,
      },
      isShowArchived: value.status && value.status === 3,
    }));
  }

  requestData = (isLancer = this.props.isLancer, page = 1) => {
    const { getTasksData, cleanTasks } = this.props;
    cleanTasks();
    getTasksData(this.getPath(isLancer), page, this.state.filters);
  }

  render() {
    const { isShowArchived } = this.state;
    const prefix = this.props.withProfile
      ? '/profile/info'
      : '/dashboard';

    return (
      <Fragment>
        {this.props.withProfile ? <Profile /> : ''}

        <BodyContainer>
          <Heading>
            <big>Dashboard.</big> You can switch the dashboard type to view different tasks
          </Heading>

          <UserTypeSwitcher prefix={prefix} request={this.requestData} />

          <Customer
            prefix={prefix}
            getSetterFilter={this.getSetterFilter}
            requestData={this.requestData}
            getSetterCustomerFilter={this.getSetterCustomerFilter}
            isShowArchived={isShowArchived}
          />

        </BodyContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLancer: state.routing.location.pathname === '/dashboard/lancer/',
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTasksData,
      cleanTasks,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskList));
