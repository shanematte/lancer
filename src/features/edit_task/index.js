import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editTask, getTaskData, getTaskCreationInfo } from 'features/tasks/ducks/actions';
import CreateTask from 'features/updated_task/';


class EditTask extends Component {
  submitButtonName = 'Edit'
  headerName = 'Edit a task'

  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      ...this.props.task,
    };
  }

  componentWillMount = () => {
    this.props.getTaskCreationInfo();
    this.props.getTaskData(this.props.taskId);
  }

  componentWillReceiveProps = (newProps) => {
    const task = {
      ...newProps.task,
    };
    task.tags = (task.tags) ? task.tags.join(',') : task.tags;
    this.setState({
      ...task,
    });
  }

  submit = () => {
    this.props.editTask(this.props.taskId, {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      actions_count: this.state.actions_count,
      price: this.state.price,
      to_top: this.state.to_top,
      currency: this.state.currency,
      tags: this.state.tags.split(','),
      multiple_actions: this.state.multiple_actions,
      min_worker_rate: this.state.min_worker_rate,
    });
  }

  render() {
    console.log(this.state)
    return (<div>
    {
      this.state.id ? <CreateTask finishEditTask={this.props.editTask} task={this.state}/> : ''
    }
    </div>);
  }
}


const mapStateToProps = state => ({
  creationInfo: state.tasks.creationInfo,
  task: state.tasks.current,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  getTaskCreationInfo,
  getTaskData,
  editTask,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
