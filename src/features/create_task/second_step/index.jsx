import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

import {
  FlexBlockContentForm,
  MainBlockSteps,
  TaskForm,
  AsideBarBlock,
  BlockSelectWallet,
  BlockInputSearch,
  ImageButton
} from '../../styled/tasks'

class SecondStep extends Component {
  setMinRate = minRate => {
    if (this.props.min_worker_rate === 1 && minRate === 1) {
      this.props.setField('min_worker_rate', 0);
    } else {
      this.props.setField('min_worker_rate', minRate);
    }
  }

  addTag(e){

    e.preventDefault()

    const {
      addTag
    } = this.props;

    let searchWord = document.getElementById('tag_title')

    addTag(searchWord.value)

    this.props.addTagInput(searchWord.value)

    searchWord.value = ''

  }

  render(){
    const {
      category,
      actions_count,
      price,
      currency,
      tags,
      multiple_actions,
      min_worker_rate,
      creationInfo,
      setField,
      complete_per_day,
    } = this.props;

    return (
      <FlexBlockContentForm>
        <TaskForm>
          <div className="addtask__input-line">
            <div className="addtask__input-wrapper">
              <strong className="addtask__title">Categories</strong>
              <Select
                name="form-field-name"
                className="cat_input"
                value={category}
                onChange={e => setField('category', e.value)}
                options={creationInfo.categories.map(cat => ({ value: cat, label: cat }))}
              />
            </div>
            <div className="addtask__input-wrapper">
              <strong className="addtask__title">Places</strong>
              <input
                className="input addtask__input"
                placeholder={10}
                value={
                  actions_count === 0 ? '' : actions_count
                }
                onChange={e =>
                  setField('actions_count', e.target.value)
                }
              />
            </div>
            <div className="addtask__input-wrapper">
              <BlockSelectWallet>

                <strong className="addtask__title">Price pertask</strong>
              
                <div className="addtask__currency-wrapper">
                  <Select
                    name="form-field-name"
                    className="addtask__currency addtask__currency_selected curency_input"
                    value={currency}
                    onChange={e => setField('currency', e.value)}
                    options={creationInfo.currencies.map(c => ({ value: c.code, label: c.code }))}
                  />
                </div>

              </BlockSelectWallet>
              <input
                className="input addtask__input"
                value={price === 0 ? '' : price}
                placeholder={0}
                onChange={e => setField('price', e.target.value)}
              />
            </div>
          </div>
          <strong className="addtask__title">Tags</strong>

          <div className="tags-main-block">
            <BlockInputSearch onSubmit={this.addTag.bind(this)}>
              <input
                className="input addtask__input addtask__input_search"
                type="search"
                placeholder="Search tag"
                id="tag_title"
              />
              <ImageButton src={require('../../../assets/img/search.png')}/>
            </BlockInputSearch>
            <div className="addtask__tag-wrapper addtask__tag-wrapper_selected">

              {
                
                creationInfo.tags.map((elem, i) =>
                  <span key={i} onClick={() => {
                        this.addTag(elem);
                      }} className="addtask__tag addtask__tag_selected">#{elem}</span>)
                  
              }

            </div>
            {
              /*addtask__tag-wrapper
            <div className="task__tag-wrapper">
              {
                tags.map((tag, i)=>{
                  return <span index={i} className="addtask__tag">
                    { tag }
                  </span>
                })
              }
            </div>
            */
            }
          </div>
          <h2 className="addtask__title addtask__title_big">
            Other - <span>it`s not important to fill</span>
          </h2>
          <div className="addtask__input-line">
            <div className="addtask__input-wrapper">
              <strong className="addtask__title">Complete per day</strong>
              <input
                value={complete_per_day || ''}
                className="input addtask__input"
                placeholder={0}
                onChange={e =>
                  setField('complete_per_day', e.target.value)
                }
              />
            </div>
            <div className="addtask__input-wrapper">
              <strong className="addtask__title">Request count</strong>
              <input
                value={
                  multiple_actions === 0
                    ? ''
                    : multiple_actions
                }
                className="input addtask__input"
                onChange={e =>
                  setField('multiple_actions', e.target.value)
                }
              />
            </div>
            <div className="addtask__input-wrapper">
              <strong className="addtask__title">Lancer`s rating</strong>
              <div className="addtask__star-wrapper">
                <div
                  className={[
                    'addtask__star',
                    min_worker_rate >= 1 ? 'addtask__star_full' : '',
                  ].join(' ')}
                  onClick={e => this.setMinRate(1)}
                />
                <div
                  className={[
                    'addtask__star',
                    min_worker_rate >= 2 ? 'addtask__star_full' : '',
                  ].join(' ')}
                  onClick={e => this.setMinRate(2)}
                />
                <div
                  className={[
                    'addtask__star',
                    min_worker_rate >= 3 ? 'addtask__star_full' : '',
                  ].join(' ')}
                  onClick={e => this.setMinRate(3)}
                />
                <div
                  className={[
                    'addtask__star',
                    min_worker_rate >= 4 ? 'addtask__star_full' : '',
                  ].join(' ')}
                  onClick={e => this.setMinRate(4)}
                />
                <div
                  className={[
                    'addtask__star',
                    min_worker_rate >= 5 ? 'addtask__star_full' : '',
                  ].join(' ')}
                  onClick={e => this.setMinRate(5)}
                />
              </div>
            </div>
          </div>
        </TaskForm>
        <AsideBarBlock>
          <strong className="page-sidebar__title">Tips for second step</strong>
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

const mapDisplatchToProps = (dispatch) => {
  return {
    addTagInput:(tag)=>{
      return dispatch({
        type:'TASK_ADD_TAG',
        tag
      })
    }
  }
}

export default connect(mapStateToProps, mapDisplatchToProps)(SecondStep);
