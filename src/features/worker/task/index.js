import React, { Component } from 'react';

import {
  BlockView,
  TaskInformation
} from '../../styled/profile'

export default class LancerTask extends Component {
  
  render() {
    const {
      task,
      status,
    } = this.props.action;

    return (
      <BlockView>
        <div className="task_component">
          <div className="task_component-name">{ task.name }</div>
          <div className="task_component-published">{ task.published_at }</div>
          <div className="task_component-published">{ status }</div>
        </div>

        <div className="task_component">
          <div className="task_component-name-creator">{ task.creator.username } - { task.creator.rating }</div>
        </div>
        <div className="task_component">
          <div className="task_component-description">{ task.description }</div>
          <div className="task_component-price">
            <span>{ task.price }</span>
            { task.currency }
          </div>
        </div>

        { task.tags }

        <hr />
      </BlockView>
    );
  }
}
