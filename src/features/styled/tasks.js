import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const FlexBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
        align-items:center;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
        align-items:center;
    }
`

const FlexBlockContentForm = styled.div`
    width:100%;
    display:flex;
    margin-top:15px;
    margin-bottom:15px;
    flex-direction:row;
    justify-content:space-between;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const MainBlockSteps = styled.div`
    display:table;
    margin:15px 0;
    float:left;
    width:100%;
`

const BlockView = styled.div`
    width:100%;
    display:table;
    padding: 20px 0 35px 0;
    background:#fff;
    font-family: "open sans", helvetica, arial, sans-serif;
`

const StepTopblock = styled.div`
    width:100%;
    display:table;
    padding:25px 5px;
    background:#fff;


`

const TaskInformation = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:15px 0;
    width:100%;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
        align-items:flex-start;
        display:none;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
        align-items:flex-start;
        display:none;
    }
`

const TaskForm = styled.div`
    width:100%;
    margin-right:15px;
`

const AsideBarBlock = styled.div`
    width:30%;

    @media ${mediaQueries.mobile} {
        width:100%;
        flex-direction:column;
        align-items:flex-start;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
        flex-direction:column;
        align-items:flex-start;
    }
`

const BlockSelectWallet = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const IconButton = styled.img`
    width:11px;
    height:11px;
    display:block;
    position:relative;
    margin-left:5px;
    top:-2px;
`

const IconButtonTime = styled.img`
    width: 20px;
    height: 20px;
    display: block;
    position: relative;
    margin-right: 7px;
    top: 0px;
`

const Sectionbutton = styled.div`
        display:flex;
        flex-direction:row;

        & a {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
        }

        @media ${mediaQueries.mobile} {
            display:none;
        }  

        @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
            display:none;
        } 
`

const HeadTitleBlock = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
`

const StatusText = styled.h2`
    font-weight: bold;
    font-size: 14px;
    font-family: objective,helvetica,arial,sans-serif;
`

const TitleTask = styled.h1`
    font-size: 25px;
    font-family: objective,helvetica,arial,sans-serif;
    font-weight: normal;
    color: rgba(0,0,0,1);
`

const BlockCreater = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:2px 0 10px 0;

    & p {
        margin-right:5px;
        color:rgba(0,0,0,0.67);
    }

    & > div{
        position:relative;
        top:-2px;
    }
`

const BlockSearchInfo = styled.div`
    width:100%;
`

const BlockSearchInfoLeft = styled.div`
    width:75%;

    @media ${mediaQueries.mobile} {
        width:100%;
    }  

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
    } 
`
const BlockSearchInfoRight = styled.div`
    width:25%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;

    & span {
        display:block;
        margin-right:5px;
        font-weight:bold;
        color: rgba(0, 0, 0, 0.72);
        font-size: 21px;
    }

    & p {
        text-transform:uppercase;
        font-size:17px;
    }

    @media ${mediaQueries.mobile} {
        width:100%;
    }  

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
    }       
`

const TagsBlock = styled.div`
    width: 100%;
    padding: 12px 0 0;
    margin: 10px 0 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    & span {
        display: block;
        float: left;
        padding:0 7px 0 0;
        margin: 0 5px 5px 0;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.59);
        border-right: 1px solid rgba(0, 0, 0, 0.13);
    }

    & span:nth-last-child(1) {
        border-right: 1px solid rgba(0, 0, 0, 0);
    }
`

const BlockInputSearch = styled.form`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
`

const ImageButton = styled.img`
    width:17px;
    height:17px;
    display:block;
    cursor:pointer;
`

const BlockDescription = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const BlockPageDescription = styled.div`
    width:100%;
    display:table;
    position:relative;
    font-family: "open sans",helvetica,arial,sans-serif;
`

const BlockHeadTitle = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:20px 0;

    & h1 {
        font-size: 28px;
        font-weight: normal;
        font-family: "open sans",helvetica,arial,sans-serif;
        color: #000;
        margin-top:0px;
    }

    & span {
        margin-top:0px;
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;

        & span {
            margin-top:10px;
        }
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;

        & span {
            margin-top:10px;
        }
    }
`

const ContentTaskFull = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:0 0 15px 0;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const ContentTaskFullLeft = styled.div`
    width:75%;
    display:table;
    margin-bottom:0px;

    & p {
        font-family: "open sans",helvetica,arial,sans-serif;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.8);
    }

    @media ${mediaQueries.mobile} {
        width:100%;
        margin-bottom:15px;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
        margin-bottom:15px;
    }
`

const ContentTaskFullRight = styled.div`
    width:23%;
    margin-left:2%;
    padding:15px;
    background:#fff;
    border-radius:5px;
    display:table;

    @media ${mediaQueries.mobile} {
        width:100%;
        margin-left:0%;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:100%;
        margin-left:0%;
    }
`

const TaskRequestsBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    & h2 {
        font-size: 31px;
        font-weight: normal;
        font-family: "open sans",helvetica,arial,sans-serif;
        color: #000;
        margin-top:25px;
        margin-bottom: 15px;
    }
`

const ContentTaskFullRightUserAvatar = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;

    & h4 {
        margin-left: 10px;
        font-size: 16px;
        font-weight: normal;
        position: relative;
        top: -1px;
        color: rgba(0, 0, 0, 0.97);
    }
`

const AvatarUser = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #e2e2e2;
`

const DefaultAvatar = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #e2e2e2;
`

const RatingBlock = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:10px 0 5px;

    & h5 {
        font-weight: normal;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.73);
    }
`

const InformationUserTask = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:5px 0;

    & p {
        color: rgba(0, 0, 0, 0.7);
        font-size: 15px;
    }

    & h2 {
        color: rgba(0, 0, 0, 0.56);
        font-size: 16px;
    }
`

const BlockHeadTitleTask = styled.div`
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

const ButtonTask = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background:none;
    outline:none;
    border:none;
    cursor:pointer;
`

export {
	BlockView,
    TaskInformation,
    FlexBlock,
    FlexBlockContentForm,
    MainBlockSteps,
    StepTopblock,
    TaskForm,
    AsideBarBlock,
    BlockSelectWallet,
    IconButton,
    Sectionbutton,
    IconButtonTime,
    HeadTitleBlock,
    StatusText,
    TitleTask,
    ButtonTask,
    BlockCreater,
    BlockSearchInfo,
    BlockSearchInfoLeft,
    BlockSearchInfoRight,
    TagsBlock,
    BlockInputSearch,
    ImageButton,
    BlockDescription,
    BlockPageDescription,
    BlockHeadTitle,
    ContentTaskFull,
    ContentTaskFullLeft,
    ContentTaskFullRight,
    TaskRequestsBlock,
    ContentTaskFullRightUserAvatar,
    AvatarUser,
    DefaultAvatar,
    RatingBlock,
    InformationUserTask,
    BlockHeadTitleTask
}