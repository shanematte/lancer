import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const FaqBlock = styled.div`
	width:100%;
    display:table;
    font-family: "open sans", helvetica, arial, sans-serif;

    & big {
        display:block;
        font-size: 36px;
        margin:26px 0;
        line-height: 40px;  
        text-transform:uppercase;      
    }
`

const Title = styled.h1`
    display: block;
    color: #333;
    padding:30px 0;
    font-family: "open sans", helvetica, arial, sans-serif;
    font-size: 32px;
    line-height: 40px;
`

const TitleQuest = styled.h4`
    display: block;
    color: #5f5f5f;
    font-family: "open sans",helvetica,arial,sans-serif;
    font-size: 16px;
    line-height: 30px;
    font-weight:bold;
`

const ItemFaq = styled.div`
margin: 13px 0 25px 0;
    padding: 26px 15px;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #e2e2e2c2;
    box-shadow:${props => props.show ? '0 0 27px rgba(160, 160, 160, 0.6)' : '0 0 0 transparent'};
`

const ItemText = styled.p`
    color: #1d1d1d;
    font-family: objective,helvetica,arial,sans-serif;
    font-size: 16px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
    margin-top: 20px;
`

const BlockTilteItem = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    align-items:center;
`

const Image = styled.img`
    width:20px;
    height:20px;
`

export {
	FaqBlock,
    Title,
    TitleQuest,
    ItemFaq,
    ItemText,
    BlockTilteItem,
    Image
}