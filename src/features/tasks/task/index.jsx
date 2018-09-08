import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatingDate } from 'utils';
import { taskStatus, actionStatus } from 'features/common/dictionary';
import { ajaxRequest, compileQuery } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';
import './style.css';

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
  TaskInformation,
  IconButton,
  Sectionbutton,
  IconButtonTime,
  HeadTitleBlock,
  StatusText,
  TitleTask,
  BlockCreater,
  BlockSearchInfo,
  BlockSearchInfoLeft,
  BlockSearchInfoRight,
  TagsBlock,
  BlockHeadTitleTask,
  ButtonTask
} from '../../styled/tasks'

import Rating from '../../profile/rating'

export class SearchTask extends Component {
  render() {
    const { task } = this.props;

    return (
      <div className="task">
        <HeadTitleBlock className="task_component">
          <TitleTask><Link to={'/tasks/'+task.id}>{task.name}</Link></TitleTask>
          <StatusText className="task_component-published">{ actionStatus[task.status] }</StatusText>
        </HeadTitleBlock>

        <div className="task_component">
          <BlockCreater className="task_component-name-creator">
            <p>Opened by {task.creator.username} </p>
            <Rating search={true} rating={3} />
          </BlockCreater>
        </div>
        <BlockSearchInfo className="task_component">
          <BlockSearchInfoLeft className="task_component-description">{task.description}</BlockSearchInfoLeft>
          <BlockSearchInfoRight className="task_component-price">
            <span>{ task.price.substring(0, task.price.length - 3)}</span>
            <p>{task.currency}</p>
          </BlockSearchInfoRight>
        </BlockSearchInfo>
        <TagsBlock>
          {
            task.tags.map((tag, index) => {
              return <span key={index}>#{tag}</span>
            })
          }
        </TagsBlock>
      </div>
    );
  }
}

export class LancerTask extends Component {
  render() {
    const { task, isShowArchived } = this.props;
    const isShow =
      (task.status === 'archived' && isShowArchived) ||
      task.status !== 'archived';

    return isShow ? (
      <div className="task dashboard__task">
        <strong className="task__title"><Link to={'/tasks/'+task.id}>{task.name ? task.name : task.task.name}</Link> </strong>
        {/*
          <Sectionbutton className="task__action-wrapper">
            <Link
              to={`/tasks/${task.id}/edit/`}
              className="task__action-item task__action-item_edit"
            >
              Edit
              <IconButton src={require('../../../assets/img/pen.png')}/>
            </Link>
            <Link className="task__action-item task__action-item_archive" to="#">
              Archive
              <IconButton src={require('../../../assets/img/close.png')}/>
            </Link>
          </Sectionbutton>
        */}

        <TaskInformation>
          <span className="task__info-status">{task.status ? task.status : task.task.status}</span>
          <span className="task__info-waiting">
            <IconButtonTime src={require('../../../assets/img/time.png')}/>
            {task.waiting} 
          </span>
          <span className="task__info-accepted">{task.accepted} </span>
          <span className="task__info-canceled">{task.declined} </span>
          <span className="task__info-total">100 </span>
        </TaskInformation>
        <div className="task__text-module">
          <p className="task__text">{task.description}</p>
          <div className="task__price">
            <span className="task__price-coast">{task.price.substring(0, task.price.length - 3)} </span>
            <span className="task__price-currency">{task.currency}</span>
          </div>
        </div>
        <TagsBlock>
          {
            task.tags ?
              task.tags.map((tag, index) => {
                return <span key={index}>#{tag}</span>
              })
            : ''
          }
        </TagsBlock>
      </div>
    ) : null;
  }
}


export class DashboardTask extends Component {
  archiveTask(task){
    console.log(task)

    ajaxRequest(`/tasks/${task.id}/archive/`, {
      method: 'POST',
      body:{
        "category": task.category,
          "tags": task.tags,
          "currency": task.currency,
          "name": task.name,
          "description": task.description,
          "actions_count": task.actions_count,
          "price": task.price,
          "multiple_actions": task.multiple_actions,
          "to_top": task.to_top,
          "is_archived": true,
          "min_worker_rate": task.min_worker_rate
      }
    }, SessionToken.get())
      .then(response => {

        NotificationManager.success('Task archived');
        
      })
      .catch(error => {
        NotificationManager.error('You cannot add a task to the archive at this time');
        this.setState({
          load:!this.state.load
        })
      });

  }
  render() {
    const { task, isShowArchived } = this.props;
    const isShow =
      (task.status === 'archived' && isShowArchived) ||
      task.status !== 'archived';

    return isShow ? (
      <div className="task dashboard__task">
        <NotificationContainer/>
        <BlockHeadTitleTask>
          <strong className="task__title"><Link to={'/tasks/'+task.id}>{task.name}</Link></strong>

          <Sectionbutton className="task__action-wrapper">
            <Link
              to={`/tasks/${task.id}/edit/`}
              className="task__action-item task__action-item_edit"
            >
              Edit
              <IconButton src={require('../../../assets/img/pen.png')}/>
            </Link>
            <ButtonTask onClick={this.archiveTask.bind(this, task)} className="task__action-item task__action-item_archive" to="#">
              Archive
              <IconButton src={require('../../../assets/img/close.png')}/>
            </ButtonTask>
          </Sectionbutton>
        </BlockHeadTitleTask>

        <TaskInformation>
          <span className="task__info-status">{task.status}</span>
          <span className="task__info-waiting">
            <IconButtonTime src={require('../../../assets/img/time.png')}/>
            {task.waiting} 
          </span>
          <span className="task__info-accepted">{task.accepted} </span>
          <span className="task__info-canceled">{task.declined} </span>
          <span className="task__info-total">100 </span>
        </TaskInformation>
        <div className="task__text-module">
          <p className="task__text">{task.description}</p>
          <div className="task__price">
            <span className="task__price-coast">{task.price.substring(0, task.price.length - 3)} </span>
            <span className="task__price-currency">{task.currency}</span>
          </div>
        </div>
        <TagsBlock>
          {
            task.tags ?
              task.tags.map((tag, index) => {
                return <span key={index}>#{tag}</span>
              })
            : ''
          }
        </TagsBlock>
      </div>
    ) : null;
  }
}
