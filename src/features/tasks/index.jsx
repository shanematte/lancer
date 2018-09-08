import React from 'react';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroller';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import LancerTask from 'features/worker/task';
import _ from 'underscore';
import { getFilterParams, cleanTasks } from 'features/tasks/ducks/actions';

import { SearchTask, DashboardTask, LancerTask } from './task/index';

class Tasks extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      tasksData:[]
    }
  }

  static propTypes = {
    requestTasks: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    getFilterParams: PropTypes.func.isRequired,
    cleanTasks: PropTypes.func.isRequired,
    type: PropTypes.string,
    isShowArchived: PropTypes.bool,
  }

  componentWillMount = () => {
    const { type, getFilterParams } = this.props;
    if (type && type === 'lancer') {
      getFilterParams('dashboard/lancer/');
    } else {
      getFilterParams('dashboard/customer/');
    }

  }

  componentWillUnmount() {
    this.props.cleanTasks();
  }

  onClick = elem => {
    this.props.push(`/tasks/${elem.id}`);
  }

  getComponents = () => {
    const {
      tasksData, type, username, isShowArchived,
    } = this.props;

    return tasksData && tasksData !== 0 && tasksData.length
      ? tasksData.map((elem, i) => {
        let task = null;
        if (type && type === 'lancer') {
          task = <LancerTask key={`components-dashboard-${i}`} isShowArchived={isShowArchived} task={elem} />;

        } else if (elem.creator) {
          if (username === elem.creator.username) {
            task = (<DashboardTask
              key={`components-dashboard-${i}`}
              task={elem}
              isShowArchived={isShowArchived}
            />);

          } else {
            task = <SearchTask key={`components-search-${i}`} task={elem} />;
          }
        }

        return (
          <div
            key={`components-link-${i}`}
          >
            {task}
          </div>
        );
      })
      : null;
  }

  render() {
    const children = this.getComponents() || '';

    return (
      <InfiniteScroll
        hasMore={false}
        loadMore={this.props.requestTasks}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {children}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  tasksData: state.tasks.tasksData,
  hasMore: state.tasks.hasMore,
  username: state.user.username,
  statusTaskFilter:state.user.statusTaskFilter
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
      getFilterParams,
      cleanTasks,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
