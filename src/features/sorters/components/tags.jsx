import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';

import '../style.css';

class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [],
    };
  }

  getOptions = () =>
    this.props.tags.map(elem => ({
      label: `#${elem}`,
      value: elem,
    }))

  handleSelectChange = value => {
    this.setState({ value });
    this.props.setFilter(value);
  }

  render() {
    return (
      <div className="task__tag-wrapper">
        {this.props.tags.map((elem, i) => (
          <span
            key={`tags-${i}`}
            className="task__tag"
            onClick={this.handleSelectChange}
          >
            {elem}
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tasks.filters.tags,
});

export default connect(mapStateToProps)(Tags);
