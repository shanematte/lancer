import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const MainBlock = styled.div`
	width:100%;
	height:100vh;
	background:#f7f7f7;
	display:flex;
	justify-content:center;
	align-items:center;
`

const AuthBlock = styled.div`
	width:400px;
	display:table;
	border:1px solid #377dff;
	padding:27px;
	border-radius: 7px;

  	@media ${mediaQueries.mobile} {
   		width:90%;
  	}

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:90%;
    }
`

const Input = styled.input`
	width: 100%;
    height: 50px;
    padding: 0 0 0 20px;
    border: none;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    margin: 0 0 18px 0;
    font-family: "open sans", helvetica, arial, sans-serif;
`

const Button = styled.input`
	background: #377dff;
    width: 100%;
    height: 50px;
    cursor: pointer;
    color: #fff;
    padding: 0 0 0 20px;
    border: none;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    margin: 0 0 10px 0;
    font-family: "open sans",helvetica,arial,sans-serif;
`

export {
	MainBlock,
	AuthBlock,
	Input,
	Button
}