import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  FlexBlockContentForm,
  MainBlockSteps,
  TaskForm,
  AsideBarBlock,
  BlockDescription
} from '../../styled/tasks'

class ThirdStep extends Component {
  getToTopComission = () => {
    let commission = 0;
    this.props.creationInfo.currencies.forEach(c => {
      if (c.code === this.props.currency) {
        commission = c.price;
      }
    });
    return commission;
  }

  render() {
    const {
      currency,
      price,
      actions_count,
      setField,
      to_top,
      name,
      description,
      creationInfo,
      tags,
    } = this.props;

    console.log(creationInfo)

    return (
      <FlexBlockContentForm>
        <TaskForm>
          <strong className="addtask__title">Boost your task</strong>
          <div className="addtask__boost-module">
            <div className="addtask__boost-desc">

              <BlockDescription>
                <div>
                  <strong className="addtask__boost-title">
                    Boost type <span>#1</span>
                  </strong>
                  <p className="addtask__boost-text">
                    In it except to so temper mutual tastes mother. Interested
                    cultivated its continuing now yet are. Acceptance our
                    partiality affronting unpleasant why add. Esteem garden men
                    yet shy course.
                  </p>
                </div>

                <div className="addtask__boost-wrapper">
                  <input
                    type="checkbox"
                    id="boostIt"
                    onChange={e => setField('to_top', e.target.checked)}
                    checked={to_top}
                  />
                  <span className="addtask__boost-price">
                    +{this.getToTopComission()}
                  </span>
                  <span className="addtask__boost-currency">{currency}</span>
                  <label className="addtask__boost-checkbox" htmlFor="boostIt" />
                </div>
              </BlockDescription>

              <div className="task task_boost">
                <strong className="task__title">{name}</strong>
                <div className="task__autor">
                  Opened by&nbsp;{' '}
                  <span className="task__autor-name">AlexxxCy93</span>
                  <div className="task__autor-rating">
                    <div className="task__star task__star_full" />
                    <div className="task__star task__star_full" />
                    <div className="task__star task__star_full" />
                    <div className="task__star task__star_full" />
                    <div className="task__star task__star_full" />
                  </div>
                </div>
                <p className="task__text">{description}</p>
                <div className="task__tag-wrapper">
                  {creationInfo.tags.map((elem, i) => (
                    <div
                      className="addtask__tag-module"
                      key={`addtask__tag-module-${i}`}
                    >
                      <span
                        className="addtask__tag addtask__tag_selected addtask__tag_selected_three"
                        onClick={() => setField('tags', elem)}
                      >
                        #{elem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="addtask__result">
            TOTAL:&nbsp;
            <span className="addtask__result-summ">
              {price * actions_count + (to_top ? this.getToTopComission() : 0)}
            </span>
            <span className="addtask__result-currency">{currency}</span>
            <span className="addtask__result-calc">
              ({price} {currency} * {actions_count} tasks{' '}
              {to_top ? ` + ${this.getToTopComission()} ${currency} Boost` : ''})
            </span>
          </p>
        </TaskForm>
        <AsideBarBlock>
          <strong className="addtask__title">Tips for second step</strong>
          <div className="addtask__module">
            <strong className="addtask__tips-title">Categories</strong>
            <p className="addtask__text">
              Must contain from 5 to 15 letters and no dirty words
            </p>
            <strong className="addtask__tips-title">Places</strong>
            <p className="addtask__text">Must contain from 5 to 15</p>
            <strong className="addtask__tips-title">Price per task</strong>
            <p className="addtask__text">Must contain from 5 to 15</p>
            <strong className="addtask__tips-title">About tags</strong>
            <p className="addtask__text">
              Must contain from 5 to 15 letters and no dirty words from 5 to 15
              letters and no dirty words
            </p>
          </div>
        </AsideBarBlock>
      </FlexBlockContentForm>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tasks.filters.tags,
});

export default connect(mapStateToProps, {})(ThirdStep);
