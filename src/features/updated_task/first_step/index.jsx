import React from 'react';

import {
  FlexBlockContentForm,
  MainBlockSteps,
  TaskForm,
  AsideBarBlock
} from '../../styled/tasks'

const FirstStep = props => (
  <MainBlockSteps>
    <FlexBlockContentForm>
      <TaskForm>
        <strong className="addtask__title">Title</strong>
        <input
          className="input addtask__input"
          type="text"
          placeholder="Enter the title"
          value={props.name}
          onChange={e => props.setField('name', e.target.value)}
        />
        <strong className="addtask__title">Description</strong>
        <textarea
          className="input input_area addtask__input addtask__input_area"
          placeholder="Enter the description"
          onChange={e => props.setField('description', e.target.value)}
          value={props.description}
        >
          {props.description}
        </textarea>
      </TaskForm>
      <AsideBarBlock>
        <strong className="addtask__title">Tips for first step</strong>
        <div className="addtask__module">
          <strong className="addtask__tips-title">Title</strong>
          <p className="addtask__text">
              Must contain from 5 to 15 letters and no dirty words
          </p>
          <strong className="addtask__tips-title">Description</strong>
          <p className="addtask__text">
              Must contain from 5 to 15 letters and no dirty words from 5 to 15
              letters and no dirty words
          </p>
        </div>
      </AsideBarBlock>
    </FlexBlockContentForm>
  </MainBlockSteps>
);

export default FirstStep;
