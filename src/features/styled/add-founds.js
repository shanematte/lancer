import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const FlexBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    & h1 {
        font-family: "open sans",helvetica,arial,sans-serif;
        font-size: 35px;
        font-weight: normal;
        margin: 15px 0;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
        align-items:center;
    }
`

const WalletsBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
       flex-direction:column;
    }
`

const WalletsBlockContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:49%;
    margin-bottom:0px;
    box-shadow: 0 0 21px rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius:4px;
    display:flex;
    padding:15px;
    background:#fff;

    @media ${mediaQueries.mobile} {
        width:100%;
        margin-bottom:10px;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
       width:100%;
       margin-bottom:10px;
    }
`

const WalletsBlockContentInfoWallet = styled.div`
    width:100%;
    display:flex;
    width:30%;
    flex-direction:column;
    align-items:center;

    & h2 {
        font-family: "open sans",helvetica,arial,sans-serif;
        font-size:22px;
        color:#2d2d2d;
    }
`

const WalletsBlockContentInfoWalletLeft = styled.div`
    width:100%;
    display:flex;
    width:70%;
    margin-right:10px;
    flex-direction:column;

    & h2 {
        font-family: "open sans",helvetica,arial,sans-serif;
        font-size: 21px;
        color: #2d2d2d;
        font-weight: normal;
    }

    & p {
        font-family: "open sans",helvetica,arial,sans-serif;
        font-size: 14px;
        color: #777777;
        font-weight: normal;
    }
`

const WalletsBlockContentRight = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const WalletsBlockContentLeft = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const WalletsFormBlock = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    border-radius:3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    padding:0 0 0 7px;
    margin-top:10px;
    font-family: "open sans",helvetica,arial,sans-serif;

    & p {
        padding:7px 7px 7px 0;
    }

    & input {
        width: 100%;
        height: 40px;
        padding: 0 10px 0 0;
        border: none;
        outline:none;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.54);
    }

    & span {
        cursor: pointer;
        background: #e7951e;
        height: 40px;
        padding: 0 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`

const WalletsFormBlockEtherium = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    border-radius:3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    padding:0 0 0 7px;
    margin-top:10px;
    font-family: "open sans",helvetica,arial,sans-serif;

    & p {
        padding:7px 7px 7px 0;
    }

    & input {
        width: 100%;
        height: 40px;
        padding: 0 10px 0 0;
        border: none;
        font-size: 13px;
        outline:none;
        color: rgba(0, 0, 0, 0.54);
    }

    & span {
        cursor: pointer;
        background: #5e7997;
        height: 40px;
        padding: 0 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`

const WalletQRImage = styled.img`
    width:100%;
    height:auto;
`

export {
    FlexBlock,
    WalletsBlock,
    WalletsBlockContent,
    WalletsBlockContentInfo,
    WalletsBlockContentLeft,
    WalletsBlockContentRight,
    WalletsBlockContentInfoWallet,
    WalletsBlockContentInfoWalletLeft,
    WalletsFormBlock,
    WalletQRImage,
    WalletsFormBlockEtherium
}