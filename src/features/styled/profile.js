import React from 'react'
import styled from 'styled-components'

//media
import { mediaQueries } from './media'

const BlockProfile = styled.div`
    width:100%;
    display:table;
    padding: 20px 0 35px 0;
    background:#fff;
    font-family: "open sans", helvetica, arial, sans-serif;

    & big {
        display:block;
        font-size: 36px;
        margin:26px 0;
        font-size:33px;
        line-height: 40px;     
    }
`

const ProfileSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const ProfileHeadLinks = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    & a {
        display: block;
        font-size: 12px;
        margin: 0 0 0 10px;
        border: 1px solid rgba(17,92,107,0.18);
        padding: 14px 40px;
        color: rgba(0, 0, 0, 0.51);
        border-radius: 5px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-family: "open sans",helvetica,arial,sans-serif;

        @media ${mediaQueries.mobile} {
            width:100%;
            margin:5px 0;
            text-align:center;
            padding:23px 0;
        }
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
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

const AvatarBlock = styled.div`
    display: block;
    width:100px;
    height:100px;
    border-radius:50%;
    background:rgba(0,0,0,0.1);
    margin-right:15px;
`

const SectionRightBlock = styled.div`
    display: flex;
    flex-direction:column;
    width:100%;
    margin:0 17px 0 0;

    @media ${mediaQueries.mobile} {
        margin:7px 0;
    }  

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        margin:7px 0;
    }
`

const SectionRightBlockStars = styled.div`
    display: flex;
    flex-direction:column;
    margin:0 17px 0 0;

    @media ${mediaQueries.mobile} {
        margin:7px 0;
    } 

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        margin:7px 0;
    }
`

const SectionRightBlockStarsTask = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    margin:0 17px 0 0;

    & p {
        margin-right:10px;
    }

    & img {
        width:15px;
        height:15px;
    }

    @media ${mediaQueries.mobile} {
        margin:7px 0;
    } 

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        margin:7px 0;
    }
`

const SectionUserBlock = styled.div`
    display: flex;
    flex-direction:row;
    width:100%;
    margin:0 17px 0 0;

    & a {
        margin:6px 0 0 0;
    }

`

const LinkTitle = styled.div`

    & a {
        color:#377dff;
        display:block;
        margin-top:5px;
        font-size:16px;
    }
    
`

const TextTop = styled.p`
    font-size: 15px;
    display: block;
    text-transform:uppercase;
    margin: 7px 0 6px 0;
    padding: 0; 
    color: rgba(0, 0, 0, 0.47);
`

const SectionAvatarBlock = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:120px;
    margin-right:1%;
    height:120px;
    border-radius:50%;
    background:rgba(0,0,0,0.2);

    & p {
        font-size:22px;
        margin:0 0 3px 0;
    }

    @media ${mediaQueries.mobile} {
        width:150px;
        height:150px;
        margin:10px auto;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        width:150px;
        height:150px;
        margin:10px auto;
    }

`

const SectionContentBlock = styled.div`
    display: flex;
    flex-direction:column;
    width:90%;

`

const BlockLeftUser = styled.div`
    display: flex;
    flex-direction:row; 
`

const ListInformation = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:letter-spacing;

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const ProfileTopSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    & big {
        @media ${mediaQueries.mobile} {
            margin:10px 0;
        } 
    }

    @media ${mediaQueries.mobile} {
        flex-direction:column;
    }

    @media ${mediaQueries.tablet} and ${mediaQueries.maxTablet} {
        flex-direction:column;
    }
`

const TextNickname = styled.p`
    display: block;
    font-size: 19px;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;
`

const StarSectionSearch = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:2px;

    & img{
        display:block;
        float:left;
        margin:0 3px;
    }
`

const StarSection = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:2px;

    & img{
        display:block;
        float:left;
        margin:0 3px;
    }
`

const BoldText = styled.h2`
    font-weight: bold;
    font-size: 29px;
    line-height: 19px;
    float:left;
    display:flex;
    flex-direction:row;

    & p {
        display: block;
        margin-left: 7px;
        text-transform: uppercase;
        font-weight: normal;
        font-size: 28px;
        padding: 0;
        color: rgba(0, 0, 0, 0.74);
        line-height: 19px;
        letter-spacing: 2px;
    }
`

const Image = styled.img`
    width: 20px;
    height: 20px;
    margin-left:7px;
`

const StarImg = styled.img`
    width:12px;
    height:12px;
    display:block;
`

export {
	Title,
    BlockProfile,
    ProfileSection,
    ProfileHeadLinks,
    ProfileTopSection,
    AvatarBlock,
    SectionRightBlock,
    ListInformation,
    SectionAvatarBlock,
    SectionContentBlock,
    LinkTitle,
    TextTop,
    TextNickname,
    StarSection,
    BoldText,
    Image,
    SectionUserBlock,
    BlockLeftUser,
    SectionRightBlockStars,
    StarSectionSearch,
    StarImg,
    SectionRightBlockStarsTask
}