import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const BlockRequest = styled.div`
    width:100%;
    display:flex;
    padding:15px;
    flex-direction:column;
    border-radius:8px;
    background:#fff;
    margin-bottom:60px;

    & h4 {
        margin:0 0 10px 0;
        font-size: 19px;
        font-family: objective,helvetica,arial,sans-serif;
        font-weight: normal;
        color: #000;
    }

    @media ${mediaQueries.mobile} {
        
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        
    }
`

const BlockRequestCus = styled.div`
    width:100%;
    display:flex;
    padding:15px;
    flex-direction:column;
    border-radius:8px;
    background:#fff;
    margin-top:30px;
    margin-bottom:60px;
    position:relative;

    & h4 {
        margin:0 0 10px 0;
        font-size: 19px;
        font-family: objective,helvetica,arial,sans-serif;
        font-weight: normal;
        color: #000;
    }

    @media ${mediaQueries.mobile} {
        
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        
    }
`

const BlockRequestMain = styled.div`
    width:100%;
`

const BlockRequestButton = styled.button`
    display: block;
    width: 100%;
    margin:3px 0 10px 0;
    height: 50px;
    color: #fff;
    font-family: objective,helvetica,arial,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    background: #377dff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 5px 8px 0 rgba(55,125,255,0.4);
    transition: box-shadow 0.2s;
    margin-top: 20px;
    width: 100%;
    cursor:pointer;
`

const HeadBlockRequest = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding: 10px 0 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    & button {

    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const ImageBlockUser = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:10px;
`

const ImageBlockUserDefault = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:#d2d2d2;
    margin-right:10px;
`

const UserAvatarBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const TextAreaBlock = styled.textarea`
    width: 100%;
    min-height: 150px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 3px;
    margin: 0 0 15px 0;
`

const TextDescriptionTaskMain = styled.p`
    margin: 0 0 20px 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.98);
    font-family: objective,helvetica,arial,sans-serif;
`

const ButtonGiveFeedBack = styled.button`
    padding: 10px 35px;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 5px;
    text-transform: uppercase;
    color: rgb(0,0,0);
    font-size: 14px;
    cursor: pointer;
    font-family: objective,helvetica,arial,sans-serif;
    outline:none;
`

const ButtonDelete = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 10px 20px;
    background: transparent;
    border: 1px solid rgb(214, 45, 45);
    border-radius: 5px;
    text-transform: uppercase;
    color: rgb(189, 27, 27);
    font-size: 15px;
    cursor: pointer;
    font-family: objective,helvetica,arial,sans-serif;
    outline:none;

    & img {
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
`

const ButtonsBottomBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:relative;
`

const ButtonSave = styled.div`
    width:79%;
    height:50px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    background:#61a429;
    color:#fff;
    border-radius: 4px;

    & img {
        margin-left: 6px;
        position: relative;
        top: 0;
        left:0px;
        transition:.3s all;

    }

    &:hover img {
        left: 3px;
        transition:.3s all;   
    }
`

const ButtonEdit = styled.div`
    width:19%;
    height:50px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    color: #000;
`

const BlockLeftInfoUser = styled.div`
    display:flex;
    width:60%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:0px;
    padding-right:5%;

    @media ${mediaQueries.mobile} {
        width:100%;
        margin-bottom:10px;
        padding-right:0%;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
        margin-bottom:10px;
        padding-right:0%;
    }
`

const BlockRightInfoUser = styled.div`
    display:flex;
    width:35%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media ${mediaQueries.mobile} {
        width:100%;
        margin-left:0%;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
        margin-left:0%;
    }
`

const AcceptButton = styled.button`
    width: 64px;
    height: 48px;
    border:1px solid green;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
`

const DeclineButton = styled.button`
    width: 64px;
    height: 48px;
    border:1px solid red;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    background:transparent;
    display:flex;
    justify-content:center;
    align-items:center;
`

const LoaderBlock = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;left:0;
    z-index:100;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#ddd;

    & h4 {
        margin:0;
        padding:0;
    }
`

export {
	BlockRequest,
    BlockRequestMain,
    BlockRequestButton,
    HeadBlockRequest,
    ImageBlockUser,
    ImageBlockUserDefault,
    UserAvatarBlock,
    TextAreaBlock,
    TextDescriptionTaskMain,
    ButtonGiveFeedBack,
    ButtonDelete,
    ButtonsBottomBlock,
    ButtonSave,
    ButtonEdit,
    BlockLeftInfoUser,
    BlockRightInfoUser,
    AcceptButton,
    DeclineButton,
    BlockRequestCus,
    LoaderBlock 
}