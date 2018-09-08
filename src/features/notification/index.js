import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

class Notify extends Component {

	componentdidMount(){

		let { message, type } = this.props;

      	switch (type) {
	        case 'info':
	          NotificationManager.info(message);
	          break;
	        case 'success':
	          NotificationManager.success('Success', message);
	          break;
	        case 'warning':
	          NotificationManager.warning('Warning', message, 3000);
	          break;
	        case 'error':
	          NotificationManager.error(message);
	          break;
      	}

	}

	render(){
		
		return(
			<NotificationContainer/>
		)

	}
}

export default Notify