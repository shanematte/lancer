import React, { Component } from 'react'
import RenderStars from './renderStars'
//styled
import {
  SectionRightBlock,
  TextTop,
  BoldText,
  Image
} from '../styled/profile'

class Total extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let { total } = this.props

		return(
			<SectionRightBlock>
                  <TextTop>Total</TextTop>
                  <BoldText>{ total } <p>deals</p></BoldText>
            </SectionRightBlock>
		)

	}
}

export default Total