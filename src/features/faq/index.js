import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

//styled
import { 
	FaqBlock,
	Title,
	TitleQuest
} from '../styled/faq'

import ListFaq from './listFaq.js'

class Faq extends Component {

	render(){

		let { list } = this.props.faq

		return (
			<FaqBlock>
				<big>faq</big>

				{
					list.map((item, index)=>{
						return <ListFaq show={false} key={index} item={item} />
					})
				}

			</FaqBlock>
		)
	}
}

const mapStateToProps = state => ({
  faq: state.faq,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Faq));