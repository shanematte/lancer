import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const BlockEditProfile = styled.div`
    width:100%;
    display:flex;
    margin-bottom:55px;
    flex-direction:column;
    font-family: "open sans",helvetica,arial,sans-serif;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BlockContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BlockContentForm = styled.div`
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

const BlockContentFormSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    & h5 {
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 15px;
        color: rgba(0, 0, 0, 0.93);
        font-family: "open sans",helvetica,arial,sans-serif;
    }

    & p {
        font-size: 21px;
        color: rgba(0,0,0,0.8);
        font-family: "open sans",helvetica,arial,sans-serif;
    }

    & input {
        width: 100%;
        height: 46px;
        font-size: 16px;
        padding: 0 10px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        color: rgba(0,0,0,0.6);
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
        outline: none;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BlockContentFormSectionLeft = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-right:15px;

    & h5 {
        font-size: 24px;
        font-weight: normal;
        margin-bottom: 10px;
        color: rgb(0, 0, 0);
        font-family: "open sans",helvetica,arial,sans-serif;
    }

    & p {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.83);
        font-family: "open sans",helvetica,arial,sans-serif;
    }

    & input {
        width: 100%;
        height: 53px;
        font-size: 17px;
        padding: 0 10px;
        color: rgba(0,0,0,0.89);
        border: 1px solid rgba(0, 0, 0, 0.12);
        margin-bottom: 10px;
        margin-top: 7px;
        outline: none;
        border-radius: 6px;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BlockEditProfileHeader = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:25px 0;
    background:#fff;

    & big {
        font-size:38px;
        font-family: "open sans",helvetica,arial,sans-serif;
    }

    & a {
        display: table;
        font-size: 14px;
        padding: 9px 38px;
        border: 1px solid rgb(196, 211, 241);
        border-radius: 7px;
        font-weight: bold;
        color: rgba(0,0,0,0.8);
        text-transform: uppercase;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BitFormContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const BitFormContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:20px;
    background:#fff;
    margin-bottom:15px;
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.06);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;

    & p {
        font-size: 18px;
        color:rgba(0, 0, 0, 0.48);
        margin-bottom: 5px;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const EditEth = styled.button`
    background:#5e7997;
    border:none;
    outline:none;
    width:138px;
    height: 44px;
    color: #fff;
    cursor:pointer;
`

const EditBit = styled.button`
    background:#e7951e;
    border:none;
    outline:none;
    width:138px;
    height: 44px;
    color: #fff;
    cursor:pointer;
`

const BlockAvatarUser = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:row;
    margin-bottom:10px;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }
`

const AvatarUser = styled.img`
    width: 85px;
    height: 85px;
    background:rgb(94, 121, 151);
    border-radius:50%;

    @media ${mediaQueries.mobile} {
        width: 115px;
        height: 115px;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width: 115px;
        height: 115px;
    }
`

const ButtonUser = styled.div`
    height:50px;
    display:flex;
    cursor:pointer;
    flex-direction:row;
    align-items:center;
    padding:0 5px;
    position:relative;
    padding:0 10px;

    :after{
        content: '';
        position: absolute;
        width: 90%;
        height: 1px;
        bottom: 14px;
        opacity: .4;
        left: 5%;
        background: #f34e4e;
    }

    & p {
        color: #f34e4e;
        font-size: 14px;
        position: relative;
        font-family: "open sans",helvetica,arial,sans-serif;
        top: -1px;
    }

    & input {
        border:none;
        outline:none;
        font-size: 16px;
        padding:0;
        background:transparent;
        color:rgba(0, 0, 0, 0.58);
        color:red;
        margin:0;
        cursor:pointer;
        font-family: "open sans",helvetica,arial,sans-serif;
    }
`

const ButtonLoadAvatar = styled.div`
    height:50px;
    display:flex;
    cursor:pointer;
    flex-direction:row;
    align-items:center;
    padding:0 5px;
    position:relative;
    padding:0 10px;
    margin-right:5px;

    :after{
        content: '';
        position: absolute;
        width: 90%;
        height: 1px;
        bottom: 14px;
        opacity: .4;
        left: 5%;
        background: #53aadc;
    }

    & p {
        color: #539ace;
        font-size: 14px;
        position: relative;
        font-family: "open sans",helvetica,arial,sans-serif;
        top: -1px;
    }

    & input {
        position:absolute;
        width:100%;
        height:100%;
        z-index:100;
        opacity:0;
        color:rgba(0, 0, 0, 0.48);
        cursor:pointer;
    }
`

const ChangeBlockPassword = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const ChangeBlockPasswordSection = styled.div`
    width:49%;
    display:flex;
    flex-direction:column;

    & input{
        font-style:italic;
        font-size:15px;
    }
`

const IconButton = styled.img`
    width:15px;
    height:15px;
    display:block;
    margin-right:4px;
`

const MainHeadBlockEdit = styled.div`
    display:table;
    width:100%;
    background:#fff;
    margin-bottom:15px;
`

const ButtonEditSave = styled.button`
    display: block;
    width: 100%;
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
    -webkit-transition: box-shadow 0.2s;
    transition: box-shadow 0.2s;
    margin-top: 20px;
    width: 100%;
    cursor:pointer;
`

export {
    BlockEditProfile,
    BlockContent,
    BlockContentForm,
    BlockContentFormSection,
    BlockEditProfileHeader,
    BlockContentFormSectionLeft,
    BitFormContent,
    BitFormContainer,
    EditBit,
    EditEth,
    BlockAvatarUser,
    AvatarUser,
    ButtonUser,
    ButtonLoadAvatar,
    ChangeBlockPassword,
    ChangeBlockPasswordSection,
    IconButton,
    MainHeadBlockEdit,
    ButtonEditSave
}