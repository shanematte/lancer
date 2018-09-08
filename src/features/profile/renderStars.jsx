import React, { Component } from 'react'

//styled
import {
  SectionRightBlock,
  TextTop,
  StarSection,
  StarSectionSearch,
  StarImg
} from '../styled/profile'

class RenderStars extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let { stars, searchStatus } = this.props

		console.log(searchStatus)

		let starsRender = []
		for(let y = 1; y <= stars; y++){
			starsRender.push(searchStatus ? <StarImg key={y} src={require('../../assets/img/star.png')}/> : <img key={y} src={require('../../assets/img/star.png')}/>)
		}

		return(
			<StarSection>
				{ starsRender }
			</StarSection>
		)
	}
}

export default RenderStars