import React, { Component } from 'react';
import PriceRange from '../components/price';
import Tags from '../components/tags';
import '../style.css';


export default class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceMin: '',
      priceMax: '',
      tags: [],
    };
  }

  setPriceFilter = (value) => {
    this.setState({
      priceMin: value.min,
      priceMax: value.max,
    });
  }

  setTagsFilter = (tags) => {
    this.setState({ tags });
  }

  send = () => {
    this.props.setMinPriceFilter(this.state.priceMin);
    this.props.setMaxPriceFilter(this.state.priceMax);
    this.props.setTagsFilter(this.state.tags);
  }

  render() {
    return (
      <div className="price_and_tags">
        <PriceRange setFilter={this.setPriceFilter} />
        <Tags setFilter={this.setTagsFilter} />
        <button className="search-submit_btn" onClick={this.send}>Submit</button>
      </div>
    );
  }
}
