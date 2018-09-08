import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media } from 'features/common/styles';

import Tasks from 'features/tasks';
import Categories from 'features/sorters/components/categories';
import Sort from 'features/sorters/components/sort';
import CustomerFilter from 'features/sorters/containers/customerFilter';
import { getTasksData, getFilterParams, cleanTasks } from 'features/tasks/ducks/actions';

import { Wrapper, Section, Sidebar, Panel, PanelNarrow } from 'features/common/Layout';
import { BtnLinkPanel } from 'features/common/Btn';
import { SearchPanel } from 'features/sorters/components/search';
import Heading from './Heading';


const TaskListHeader = styled.h2`
  margin: 40px 0 25px;
  font-family: ${p => p.theme.fontMain};
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
`;
const MobileWrapper = styled.div`
  ${media.md`
    display: flex;
    justify-content: space-between;
  `}
`;

class Search extends Component {
  static propTypes = {
    tasksLength: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      pagename: 'Search',
      filters: {
        currency: '',
      },
    };
  }

  componentWillMount = () => {
    this.props.getFilterParams('', this.state.filters.currency);
    this.requestData();
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.wallet && newProps.wallet.currency !== this.state.filters.currency) {
      const newCurrency = newProps.wallet.currency;
      this.setState({
        filters: {
          currency: newCurrency,
        },
      });
      this.props.getFilterParams('', newCurrency);
      this.props.cleanTasks();
    }
  }

  componentWillUnmount() {
    this.props.cleanTasks();
  }

  requestData = (page = 1, filters = this.state.filters) => {
    this.props.getTasksData('search/', page, filters);
  }

  getSetterFilter = (name) =>
    (value) => {
      const { filters } = this.state;
      filters[name] = value;
      this.props.cleanTasks(1, filters);
      this.requestData(1, filters);
      this.setState({ filters });
      this.props.changeTitleSearch(value)

    }

  getSetterCustomerFilter = value => {
    this.props.cleanTasks();
    this.requestData(1, value);
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        ...value,
      },
    }));
  }

  render() {
    const {
      tasksLength,
      searchTitle
    } = this.props;

    return (
      <Fragment>
        <Heading>
          <big>Search.</big> You can find different tasks
        </Heading>
        <Wrapper>
          <Section>
            <BtnLinkPanel to="/create">
              place your task
            </BtnLinkPanel>
            <TaskListHeader>We found { tasksLength } matches «{searchTitle}»</TaskListHeader>

            <PanelNarrow>
              <MobileWrapper>
                <Sort setFilter={this.getSetterFilter('ordering')} />
              </MobileWrapper>
            </PanelNarrow>

            <Tasks requestTasks={this.requestData} />
          </Section>

          <Sidebar>
            <SearchPanel setFilter={this.getSetterFilter('search')} />
            <Panel>
              <Categories setFilter={this.getSetterFilter('category')} />
            </Panel>
            <Panel>
              <CustomerFilter noStatus getSetterFilter={this.getSetterCustomerFilter} />
            </Panel>
          </Sidebar>
        </Wrapper>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  wallet: state.currency.wallet,
  tasksLength: state.tasks.tasksData ? state.tasks.tasksData.length : 0,
  searchTitle:state.tasks.searchTitle
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTasksData,
  getFilterParams,
  cleanTasks,
  changeTitleSearch:(value)=>{
    return dispatch({
      type:'CHANGE_SEARCH_TITLE',
      value
    })
  }
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
