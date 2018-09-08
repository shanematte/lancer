import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'underscore'
import { getTasksData, getFilterParams, cleanTasks, getTasksDataFilter } from 'features/tasks/ducks/actions';
import { FilterWrapper, FilterItem, Link, Counter } from 'features/common/Filter';

class StatusChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      indexLink:0
    };
  }
  handleClick = async (code, i) => {

    this.setState({ 
      active: code,
      indexLink:i
    });
    this.props.setFilter(code);
    this.props.changeStatusTask(code)

    let { tasksData, statuses } = this.props

    let mainSelectStatus = _.where(statuses, {
      code
    })

    this.props.getTasksDataFilter('/tasks/my/', 1, {}, mainSelectStatus[0].name);

  }

  render() {

    let { indexLink } = this.state

    return (
      <FilterWrapper>
        {this.props.statuses.map((status, i) => (
          <FilterItem key={i}>
            <Link className={indexLink == i ? 'active_cat_link' : 'active_cat_link_none'} onClick={() => { this.handleClick(status.code, i); }}>{status.name}</Link>
            <Counter>{status.count}</Counter>
          </FilterItem>
        ))}
      </FilterWrapper>
    );
  }
}

StatusChoice.propTypes = {
  statuses: PropTypes.array,
  setFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  statuses: state.tasks.filters.statuses,
  tasksData: state.tasks.tasksData,
  user:state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFilterParams,
      getTasksDataFilter,
      changeStatusTask:(code)=>{
        return dispatch({
          type:'SORT_STATUS_TASKS',
          statusTaskFilter:code
        })
      },
      updateTaskForFilter: (tasks, more) => {
        return dispatch({
          type:'TASKS_DATA_RECEIVED',
          payload:{
            results:tasks,
            next:more
          }
        })
      }
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(StatusChoice);
