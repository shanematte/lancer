import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'features/common/styles';

import Tasks from 'features/tasks';
import Categories from 'features/sorters/components/categories';
import Sort from 'features/sorters/components/sort';
import CustomerFilter from 'features/sorters/containers/customerFilter';
import SearchInput, { SearchPanel } from 'features/sorters/components/search';

import { Wrapper, Section, Sidebar, Panel, PanelNarrow } from 'features/common/Layout';
import Dropdown, { DropdownTrigger, DropdownContent } from 'features/common/Dropdown';
import { BtnLinkPanel } from 'features/common/Btn';

const Dropdowns = styled.div`
  display: block;
  margin-top: 10px;
  color: ${p => p.theme.colorMain};
  font-family: ${p => p.theme.fontMain};
  border-top: 1px solid #e8e8e8;

  & .dropdown__trigger {
    line-height: 40px;
  }
  & .dropdown__content {
    left: -20px;
    right: -20px;
    padding: 30px;
    min-width: 270px;
  }

  ${media.md`
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
    border-top: none;

    & .dropdown {
      margin-right: 30px;
    }
    & .dropdown:last-child {
      margin-right: 30px;
    }
    & .dropdown__trigger {
      line-height: inherit;
    }
  `}
  ${media.lg`
    display: none;
  `}
`;
const MobileWrapper = styled.div`
  ${media.md`
    display: flex;
    justify-content: space-between;
  `}
`;


class Customer extends Component {
  static propTypes = {
    getSetterFilter: PropTypes.func,
    requestData: PropTypes.func,
    getSetterCustomerFilter: PropTypes.func,
    prefix: PropTypes.string,
    isShowArchived: PropTypes.bool,
  }

  render() {
    const {
      prefix,
      getSetterFilter,
      requestData,
      getSetterCustomerFilter,
      isShowArchived,
    } = this.props;

    return (
      <Wrapper>
        <Section>
          <BtnLinkPanel to="/create">
            place your task
          </BtnLinkPanel>

          <PanelNarrow>
            <MobileWrapper>
              <Sort setFilter={getSetterFilter('ordering')} />
              <Dropdowns>
                <Dropdown>
                  <DropdownTrigger>
                    Categories
                  </DropdownTrigger>
                  <DropdownContent>
                    <Categories setFilter={getSetterFilter('category')} />
                  </DropdownContent>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    Filter by
                  </DropdownTrigger>
                  <DropdownContent>
                    <CustomerFilter getSetterFilter={getSetterCustomerFilter} />
                  </DropdownContent>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    Search by
                  </DropdownTrigger>
                  <DropdownContent>
                    <SearchInput setFilter={getSetterFilter('search')} />
                  </DropdownContent>
                </Dropdown>
              </Dropdowns>
            </MobileWrapper>
          </PanelNarrow>

          <Tasks requestTasks={requestData} isShowArchived={isShowArchived} />

         {/* <Route
            exact
            path={`${prefix}/customer/`}
            render={() => <Tasks requestTasks={requestData} isShowArchived={isShowArchived} />}
          />*/}

          <Route
            exact
            path={`${prefix}/lancer/`}
            render={() =>
              <Tasks requestTasks={requestData} type="lancer" />
            }
          />
        </Section>
        <Sidebar>
          <SearchPanel setFilter={getSetterFilter('search')} />
          <Panel>
            <Categories setFilter={getSetterFilter('category')} />
          </Panel>
          <Panel>
            <CustomerFilter getSetterFilter={getSetterCustomerFilter} />
          </Panel>
        </Sidebar>
      </Wrapper>
    );
  }
}

export default Customer;
