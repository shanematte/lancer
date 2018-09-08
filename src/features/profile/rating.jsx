import React, { Component } from 'react'
import RenderStars from './renderStars'
//styled
import {
  SectionRightBlock,
  TextTop,
  SectionRightBlockStars,
  SectionRightBlockStarsTask
} from '../styled/profile'

class Rating extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let { rating, search, taskDescription } = this.props

		return(
			taskDescription ?
				<SectionRightBlockStarsTask>
	                  {search ? '' : <TextTop>rating - { rating }</TextTop>}
	                  <RenderStars searchStatus={search} taskDescription={taskDescription} stars={rating} />
	            </SectionRightBlockStarsTask>
			:
				<SectionRightBlockStars>
	                  {search ? '' : <TextTop>rating - { rating }</TextTop>}
	                  <RenderStars searchStatus={search} stars={rating} />
	            </SectionRightBlockStars>
		)
	}
}

export default Rating