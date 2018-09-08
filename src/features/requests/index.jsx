import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRequests, newRequest, acceptAll } from 'features/tasks/ducks/actions';
import Request from './requests';
import MyRequest from './myRequests';

import {
  BlockRequestMain,
  BlockRequestButton
} from '../styled/requests'

class BaseRequests extends React.Component {
  componentWillMount() {
    this.props.getRequests(this.props.taskId);
  }
}


class RequestsList extends BaseRequests {
  render() {
    const requests = this.props.requests;
    return (
      <div>
        {(requests.filter((e) => e.status === 'waiting for review').length) ?
          <BlockRequestButton onClick={() => this.props.acceptAll(this.props.taskId)}>Accept all</BlockRequestButton> :
          <div />
        }
        {requests.map((elem, i) => (<Request
          key={i}
          request={elem}
        />))}
      </div>
    );
  }
}


class MyRequestsList extends BaseRequests {
  render() {
    const requests = this.props.requests;
    return (
      <BlockRequestMain>
        {(this.props.maxCount > requests.length) ?
          <BlockRequestButton onClick={() => this.props.newRequest(this.props.taskId)}>New Request</BlockRequestButton> :
          <div />
        }
        {requests.map((elem, i) => (<MyRequest
          key={i}
          request={elem}
        />))}
      </BlockRequestMain>
    );
  }
}


const mapStateToProps = state => ({
  requests: state.tasks.requests,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  getRequests,
  newRequest,
  acceptAll,
}, dispatch);


export const Requests = connect(mapStateToProps, mapDispatchToProps)(RequestsList);
export const MyRequests = connect(mapStateToProps, mapDispatchToProps)(MyRequestsList);
