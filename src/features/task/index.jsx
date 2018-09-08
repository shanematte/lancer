import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTaskData, clearTask } from 'features/tasks/ducks/actions';
import { Requests, MyRequests } from 'features/requests';

import { ajaxRequest, compileQuery } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';

import Rating from '../profile/rating'

import {
  BlockPageDescription,
  BlockHeadTitle,
  ContentTaskFull,
  ContentTaskFullLeft,
  ContentTaskFullRight,
  TaskRequestsBlock,
  ContentTaskFullRightUserAvatar,
  AvatarUser,
  DefaultAvatar,
  RatingBlock,
  InformationUserTask
} from '../styled/tasks'

class Task extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      userInfo:{}
    }
  }

  componentWillMount() {
    this.props.getTaskData(this.props.taskId);
  }

  componentWillUnmount() {
    this.props.clearTask();
    this.getUserInfo()
  }

  getUserInfo(){

    const {
      id
    } = this.props.task.creator;

    ajaxRequest(`/account/`, {}, SessionToken.get())
      .then(response => {
        //console.log(response)
      })
      .catch(error => {
        //console.log(error);
      });

  }

  render() {
    const {
      task,
      username,
      taskId,
    } = this.props;

    const requestsBlock = (task.creator.username === username) ?
      <Requests taskId={taskId} /> :
      <MyRequests maxCount={task.multiple_actions} taskId={taskId} />;

    return (
      <BlockPageDescription>

        <BlockHeadTitle>
          <h1>{task.name} </h1>
          <div className="task__price">
            <span className="task__price-coast">{ task.price ? task.price.substring(0, task.price.length - 3) : ''} </span>
            <span className="task__price-currency">{task.currency}</span>
          </div>
        </BlockHeadTitle>

        <ContentTaskFull>
          
          <ContentTaskFullLeft>
            <p>{ task.description }</p>
          </ContentTaskFullLeft>

          <ContentTaskFullRight>
            
            <ContentTaskFullRightUserAvatar>
              
              {
                task.creator.avatar != null ? <AvatarUser src={task.creator.avatar} /> : <DefaultAvatar/>
              }

              <h4>{ task.creator.username }</h4>

            </ContentTaskFullRightUserAvatar>

            <RatingBlock>
              {
                task.creator.rating > 0 ?
                  <Rating rating={task.creator.rating} taskDescription={true}/>
                : <h3>No rating</h3>
              }
            </RatingBlock>

            <InformationUserTask>
              <p>Total deals</p>
              <h2>500</h2>
            </InformationUserTask>

            <InformationUserTask>
              <p>Complited</p>
              <h2>250</h2>
            </InformationUserTask>

            <InformationUserTask>
              <p>Average rating</p>
              <h2>{ task.creator.rating }</h2>
            </InformationUserTask>

          </ContentTaskFullRight>

        </ContentTaskFull>

        <TaskRequestsBlock>
          <h2>My request</h2>
          {requestsBlock}
        </TaskRequestsBlock>
      </BlockPageDescription>
    );
  }
}

const mapStateToProps = state => ({
  task: state.tasks.current,
  username: state.user.username,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTaskData,
  clearTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Task);
