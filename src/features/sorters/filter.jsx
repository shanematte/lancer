import React, { Component } from 'react';
import './style.css';

export default class Filer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filters
    };
  }

  componentDidMount() {
    this.props.setFilters(this.state);
  }

  render() {
    return;
    (
      <div className="filters">
        <span>Filter by</span>
        <span>All</span>
        <button className="sorter-button">New</button>
        <button className="sorter-button">Published</button>
        <button className="sorter-button">Closed</button>
        <button className="sorter-button">Archive</button>
        <button className="sorter-button">Price Range</button>
        <input placeholder="from" />
        <input placeholder="to" />
        <button className="sorter-button">Show 25 tasks</button>
      </div>
    );
  }
}
