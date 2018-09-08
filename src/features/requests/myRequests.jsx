import React from 'react';
import { ajaxRequest } from 'utils/api-adapter';
import { SessionToken } from 'utils/session';

import RenderStars from '../profile/renderStars'

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
  BlockRequest,
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
  LoaderBlock
} from '../styled/requests'

export default class MyRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedProof: this.props.request.proof != null ? this.props.request.proof : '',
      proof: this.props.request.proof,
      status: this.props.request.status,
      descriptionProof:'',
      load:false
    };
  }

  edit = () => {
    const taskId = this.props.request.task.id,
      id = this.props.request.id,
      data = { proof: this.state.editedProof };
    return ajaxRequest(`/tasks/${taskId}/actions/${id}/`, { method: 'PATCH', body: data }, SessionToken.get())
      .then(resp => this.setState(data));
  }

  saveAndSend = () => {
    const taskId = this.props.request.task.id,
      id = this.props.request.id;
    this.edit().then(() => {
      ajaxRequest(`/tasks/${taskId}/actions/${id}/review/`, { method: 'POST' }, SessionToken.get())
        .then(resp => this.setState({ status: 'waiting for review' }));
    });
  }

  hiddenRequest(id, taskId, reqId){

    let { proof, editedProof } = this.state

    let requestId = document.getElementById(id)
    //requestId.parentNode.removeChild(requestId)

    this.setState({
      load:!this.state.load
    })

    ajaxRequest(`/tasks/${taskId}/actions/${reqId}/`, {
      method: 'PATCH',
      body:{
        proof:editedProof
      }
    }, SessionToken.get())
      .then(response => {
        NotificationManager.success('Request updated');
      this.setState({
        load:!this.state.load
      })
      })
      .catch(error => {
        NotificationManager.error('Server error');
        this.setState({
          load:!this.state.load
        })
      });

  }

  deleteRequest(id, taskId, reqId){

    let { proof, editedProof } = this.state

    let requestId = document.getElementById(id)

    ajaxRequest(`/tasks/${taskId}/actions/${reqId}/`, {
      method: 'DELETE'
    }, SessionToken.get())
      .then(response => {
        requestId.parentNode.removeChild(requestId)
        NotificationManager.success('Request removed')
      })
      .catch(error => {
        NotificationManager.error('Server error')
      });
  }

  render() {

    const request = this.props.request;
    let { load } = this.state

    console.log(request.id)

    return (
      <BlockRequest id={`test_request_${request.id}`}>
        <NotificationContainer/>

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
            <ButtonDelete onClick={this.deleteRequest.bind(this, `test_request_${request.id}`, request.task.id, request.id)}>
              <img src={require('../../assets/img/close-icon.png')}/>
              <p>delete</p>
            </ButtonDelete>
            <ButtonGiveFeedBack>GIVE FEEDBACK</ButtonGiveFeedBack>
          </BlockRightInfoUser>
        </HeadBlockRequest>
        {
          this.state.proof != null ? <TextDescriptionTaskMain>{this.state.proof}</TextDescriptionTaskMain> : ''
        }
        <h4>Send new info about task</h4>
        <TextAreaBlock placeholder="Enter the description" value={this.state.editedProof} onChange={e => this.setState({ editedProof: e.target.value })} />
        <ButtonsBottomBlock>

        {
          load ?
            <LoaderBlock>
              <h4>Wait...</h4>
            </LoaderBlock>
          : ''
        }

            <ButtonEdit>EDIT TASK</ButtonEdit>
            <ButtonSave onClick={this.hiddenRequest.bind(this, `test_request_${request.id}`, request.task.id, request.id)}>
              <p>SAVE AND SEND TO REVIEW</p>
              <img src={require('../../assets/img/arrow-right.png')}/>
            </ButtonSave>
        </ButtonsBottomBlock>
      </BlockRequest>
    );
  }
}
