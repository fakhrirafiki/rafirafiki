import styled from 'styled-components/macro';

export const Container = styled.div`
    flex-basis: 600px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export const MainBlogImage = styled.img`
    /* border-radius: 20px; */
    border: 1px solid #E8E8E8;
    width: 100%;
    /* margin-top: 20px; */
`;

export const ArticleWrapper = styled.div`
    position: relative;
    padding: 25px;
    position: relative;
    top: -20px;
    background: #FFFFFF;
    border-radius: 20px;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        width: 30%;
        height: 3px;
        background: rgba(22, 22, 22, 0.2);
        border-radius: 19px;
    }
`;

export const TitleText = styled.p`
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    margin-top: 15px;
    padding-bottom:10px;
    border-bottom: 1px solid #EFEFEF;
`;

export const ArticleTextWrapper = styled.div`
    margin-top: 15px;

    &::first-letter {
        float: left;
        margin-right: .4rem;
        color: #E9BC3F;
        font-size: 80px;
        line-height: 5.2rem;
        font-weight: bold;
    }

    p{  
        margin-top: 15px;
        font-size: 16px;
        color: #141619;
        line-height: 150%;
    }

    img{
        max-width: 100%;
        margin: 20px 0;
    }


`;

export const GrayTextIcon = styled.p`
    color: #687684;
    display: flex;
    align-items: center;
    font-size: initial;
    font-weight: initial;
    margin-top: 10px;
    justify-content: space-between;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    align-items: center;
    color: rgba(18,18,18,0.40);
    letter-spacing: 1px;
    margin: 5px 0;
    font-size: 14px;
    line-height: 100%;
    white-space: ${(props) => props.nowrap ? 'nowrap' : 'unset'};
`;

// export const CategoryIcon = styled.img`
//     width: 12px;
//     height: 12px;
//     margin-right: 8px;
// `;

export const ProfileIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
`;



// export const IconsWrapper = styled.div`
//     margin: 10px;
//     display: flex;
// `;

// export const LinkIconWrapper = styled.span`
//     display: flex;
//     cursor: pointer;
// `;

// export const Icon = styled.img`
//     /* width: 14px; */
//     height: 14px;
//     margin-right: 8px;
//     margin-left: ${(props) => `${props.marginLeft}px` || 0};
//     cursor: pointer;
// `;