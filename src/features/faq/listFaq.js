import React, { Component } from 'react'

//styled
import {
	Title,
	TitleQuest,
	ItemFaq,
	ItemText,
	BlockTilteItem,
	Image
} from '../styled/faq'

class ListFaq extends Component {

	constructor(props){
		super(props)

		this.state = {
			show:false
		}
	}

	componentDidMount(){
		let { show } = this.props
		this.setState({
			show:show
		})
	}

	shopAnswer(){

		this.setState({
			show:!this.state.show
		})

	}

	render(){

		let { item } = this.props
		let { show } = this.state

		return(
			<ItemFaq show={this.state.show} onClick={this.shopAnswer.bind(this)}>
				<BlockTilteItem>
					<TitleQuest>{ item.question }</TitleQuest>
					{ show ? <Image src={require('assets/img/arrow.png')} /> : <Image src={require('assets/img/arrow-top.png')} /> }
				</BlockTilteItem>
				{
					show ?
						<ItemText>{ item.answer }</ItemText>
					: <div></div>
				}
				
			</ItemFaq>
		)
	}
}

export default ListFaq