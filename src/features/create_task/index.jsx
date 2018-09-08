import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTaskCreationInfo, createTask } from 'features/tasks/ducks/actions';
import FirstStep from './first_step/index';
import SecondStep from './second_step/index';
import ThirdStep from './third_step/index';

import { BodyContainer, TaskContainer } from 'features/common/Container';

import {
  FlexBlock,
  StepTopblock
} from '../styled/tasks'

class CreateTask extends Component {
  static propTypes = {
    current: PropTypes.string,
    getTaskCreationInfo: PropTypes.func,
    createTask: PropTypes.func,
    creationInfo: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: this.props.current || '',
      description: '',
      category: '',
      actions_count: 0,
      to_top: false,
      price: 0,
      currency: 'ETH',
      tags: [],
      multiple_actions: 1,
      min_worker_rate: 0,
    };
  }

  componentWillMount = () => {
    this.props.getTaskCreationInfo();
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  }

  setStep = stepNumber => {
    this.setState({
      step: stepNumber,
    });
  }

  setField = (key, value) => {
    this.setState({ [key]: value });
  }

  submit = () => {
    const {
      tags,
      name,
      description,
      category,
      actions_count,
      price,
      to_top,
      currency,
      multiple_actions,
      min_worker_rate,
    } = this.state;

    const tagsNew = Array.isArray(tags) ? tags : tags.split(',');

    this.props.createTask({
      name,
      description,
      category,
      actions_count,
      price,
      to_top,
      currency,
      tags: tagsNew,
      multiple_actions,
      min_worker_rate,
    });
  }

  addTag(tag){

    let { tags } = this.state;

    tags.push(tag)

    this.setState({
      tags
    })
  }

  showStep = () => {
    const {
      step,
      tags,
      name,
      description,
      category,
      actions_count,
      price,
      to_top,
      currency,
      multiple_actions,
      min_worker_rate,
    } = this.state;
    const { creationInfo } = this.props;

    switch (step) {
      case 1:
        return (
          <FirstStep
            name={name}
            description={description}
            setField={this.setField}
          />
        );
      case 2:
        return (
          <SecondStep
            category={category}
            actions_count={actions_count}
            price={price}
            currency={currency}
            tags={tags}
            multiple_actions={multiple_actions}
            min_worker_rate={min_worker_rate}
            creationInfo={creationInfo}
            setField={this.setField}
            addTag={this.addTag.bind(this)}
          />
        );
      case 3:
        return (
          <ThirdStep
            to_top={to_top}
            actions_count={actions_count}
            price={price}
            currency={currency}
            creationInfo={creationInfo}
            name={name}
            tags={tags}
            description={description}
            setField={this.setField}
          />
        );
      default:
        return <div>Empty</div>;
    }
  }

  onClick = e => {
    const { step } = this.state;
    if (step === 3) {
      e.target.disabled = true;
      this.submit();
    } else {
      this.nextStep();
    }
  }

  getDisabledButton = () => {
    const {
      step,
      name,
      description,
      category,
      actions_count,
      currency,
      price,
    } = this.state;

    return !((step === 1 && name && description) ||
      (step === 2 && category && actions_count && currency && price) ||
      (step === 3));
  }

  render() {
    const {
      step,
      tags
    } = this.state;

    const disabledNext = this.getDisabledButton();

    return (
      <div>
        <StepTopblock>
        <BodyContainer>
          <FlexBlock>
            <h1 className="title-module__title">Create a task</h1>
            <div className="steps">
              <div className="steps__item steps__item_1">
                <span className="steps__item-name steps__item-name_active">
                  Description
                </span>
                <div
                  className={[
                    'steps__circle',
                    step >= 1 ? 'steps__circle_active' : '',
                  ].join(' ')}
                  onClick={() => this.setStep(1)}
                />
                <span className="steps__item-number steps__item-number_active">
                  Step 1
                </span>
              </div>
              <div
                className={[
                  'steps__line steps__line_1',
                  step >= 2 ? 'steps__line_active' : '',
                ].join(' ')}
              />
              <div className="steps__item steps__item_2">
                <span className={step > 1 ? 'steps__item-name active-step' : 'steps__item-name'}>Parameters</span>
                <div
                  className={[
                    'steps__circle',
                    step >= 2 ? 'steps__circle_active' : '',
                  ].join(' ')}
                  onClick={() => !disabledNext ? this.setStep(2) : {}}
                />
                <span className={step > 1 ? 'steps__item-number active-step' : 'steps__item-number'}>Step 2</span>
              </div>
              <div
                className={[
                  'steps__line steps__line_2',
                  step === 3 ? 'steps__line_active' : '',
                ].join(' ')}
              />
              <div className="steps__item steps__item_3">
                <span className={step > 2 ? 'steps__item-name active-step' : 'steps__item-name'}>Final</span>
                <div
                  className={[
                    'steps__circle steps__circle-3',
                    step === 3 ? 'steps__circle-3_active' : '',
                  ].join(' ')}
                  onClick={() => !disabledNext ? this.setStep(3) : {}}
                />
                <span className={step > 2 ? 'steps__item-number active-step' : 'steps__item-number'}>Step 3</span>
              </div>
            </div>
            {step !== 1 && (
              <a className="title-module__link" onClick={this.previousStep}>
                previous
              </a>
            )}
            <a
              className={`btn title-module__btn ${disabledNext ? 'title-module__btn-disabled' : ''}`}
              onClick={e => disabledNext ? e.preventDefault() : this.onClick(e)}
              disabled={disabledNext}
            >
              {step !== 3 ? 'next step' : 'Publish'}
            </a>

          </FlexBlock>
          </BodyContainer>
        </StepTopblock>
        <BodyContainer>
          <div style={{display:'table',width:'100%'}}>{this.showStep()}</div>
        </BodyContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creationInfo: state.tasks.creationInfo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTaskCreationInfo,
      createTask,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
