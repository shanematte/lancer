import React, { Component } from 'react'
import RenderStars from './renderStars'
//styled
import {
  SectionRightBlock,
  TextTop,
  BoldText,
  Image
} from '../styled/profile'

class Closed extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let { closed } = this.props

		return(
			<SectionRightBlock>
                  <TextTop>Closed</TextTop>
                  <BoldText>{ closed } <p>deals</p></BoldText>
            </SectionRightBlock>
		)

	}
}

export default Closed