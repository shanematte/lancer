import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterWrapper, FilterItem, Link, Counter } from 'features/common/Filter';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      indexLink:0
    };
  }

  handleClick = (code, i) => {
    this.setState({
      active: code,
      indexLink:i
    });
    this.props.setFilter(code);
  }

  render(){
    let { indexLink } = this.state
    return (<FilterWrapper>
      {this.props.categories.map((cat, i) => (
        <FilterItem key={`categories-${i}`}>
          <Link className={indexLink == i ? 'active_cat_link' : 'active_cat_link_none'} onClick={() => { this.handleClick(cat.code, i); }}>
            {cat.name}
          </Link>
          <Counter>{cat.count}</Counter>
        </FilterItem>
      ))}
    </FilterWrapper>)
  }
}
// OLD CLASSNAME
// className={ "categories-sorter-button" + ((cat.code === this.state.active) ? ' bold' : '') }


const mapStateToProps = state => ({
  categories: state.tasks.filters.categories,
});

export default connect(mapStateToProps, {})(Categories);
