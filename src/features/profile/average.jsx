import React, { Component } from 'react'
import RenderStars from './renderStars'
//styled
import {
  SectionRightBlock,
  TextTop,
  BoldText,
  Image
} from '../styled/profile'

class Average extends Component {
	constructor(props){
		super(props)
	}

	render(){

		let { average } = this.props

		return(
			<SectionRightBlock>
                  <TextTop>average</TextTop>
                  <BoldText>{ average } <Image src={require('../../assets/img/star.png')}/></BoldText>
            </SectionRightBlock>
		)
	}
}

export default Average