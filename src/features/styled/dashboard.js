import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const DashBoardBlock = styled.div`
	width:100%;
    display:table;
    font-family: "open sans", helvetica, arial, sans-serif;
`
const FormBlock = styled.div`
    width:100%;
    display:table;
`

const SelectForm = styled.select`
    display:block;
    width:100%;
    padding:5px 10px;
    outline:none;
`

export {
	DashBoardBlock,
    FormBlock,
    SelectForm
}