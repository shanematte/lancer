import React from 'react';
import { ajaxRequest } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';

import {
  BlockRequest,
  BlockRequestCus,
  HeadBlockRequest,
  UserAvatarBlock,
  ImageBlockUser,
  ImageBlockUserDefault,
  TextAreaBlock,
  TextDescriptionTaskMain,
  ButtonGiveFeedBack,
  ButtonDelete,
  ButtonsBottomBlock,
  ButtonSave,
  ButtonEdit,
  BlockLeftInfoUser,
  BlockRightInfoUser,
  BlockRequestButton,
  AcceptButton,
  DeclineButton
} from '../styled/requests'

export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.request.status,
    };
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({ status: newProps.request.status });
  }

  getOnClickHandler = (action, status) => e => {
    const taskId = this.props.request.task.id,
      id = this.props.request.id;
    ajaxRequest(`/tasks/${taskId}/actions/${id}/${action}/`, { method: 'POST' }, SessionToken.get())
      .then(() => this.setState({ status }));
  }

  render() {
    const request = this.props.request;
    return (
      <BlockRequestCus>

        <HeadBlockRequest>

          <BlockLeftInfoUser>
            <UserAvatarBlock>
              {
                request.worker.avatar != null ? <ImageBlockUser src={request.worker.avatar}/> : <ImageBlockUserDefault/>
              }
              <p>{request.worker.username}</p>
            </UserAvatarBlock>
            <div className="col-md-3">
              {
                request.worker.rating > 0 ? <RenderStars stars={request.worker.rating} /> : <p>no rating</p>
              }
            </div>
            <div className="col-md-2">
              {this.state.status}
            </div>
          </BlockLeftInfoUser>
          <BlockRightInfoUser>
            <AcceptButton onClick={this.getOnClickHandler('accept', 'Accepted')}>
              <img src={require('../../assets/img/accept.png')}/>
            </AcceptButton>
            <DeclineButton onClick={this.getOnClickHandler('decline', 'Declined')}>
              <img src={require('../../assets/img/close-icon.png')}/>
            </DeclineButton>
            <ButtonGiveFeedBack>MORE INFO</ButtonGiveFeedBack>
          </BlockRightInfoUser>
        </HeadBlockRequest>
        {
          request.proof != null ? <TextDescriptionTaskMain>{request.proof}</TextDescriptionTaskMain> : ''
        }
      </BlockRequestCus>
    );
  }
}
