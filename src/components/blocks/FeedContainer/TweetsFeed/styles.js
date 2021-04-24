import styled from 'styled-components/macro';

export const Container = styled.div`
    /* padding: 10px; */
    /* min-height: 100px; */
`;

export const StyledTweetCard = styled.section`
    position: relative;
    /* min-height: 150px; */
    border-bottom: 1px solid #EBEEF0;
    padding: 10px;
    cursor: pointer;

    &:hover{
        background-color:#dfd7c342;
    }
`;

export const PinIcon = styled.img`
    position: absolute;
    right: 20px;
    top: 15px;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const ProfileImage = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
    margin: 10px;
`;

export const WrapperContent = styled.div`
    margin: 10px;
`;

export const GrayTextIcon = styled.p`
    /* padding: 25px; */
    color: #687684;
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const ClockIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 8px;
`;

export const Text = styled.p`
    margin-top: 10px;
    /* max-width: 600px; */
    /* padding: 25px; */
`;

export const IconsWrapper = styled.div`
    margin: 10px;
    display: flex;
`;

export const LinkIconWrapper = styled.div`
    display: flex;
    cursor: pointer;
`;






export const Icon = styled.img`
    /* width: 14px; */
    height: 14px;
    margin-right: 8px;
    margin-left: ${(props) => `${props.marginLeft}px` || 0};
    cursor: pointer;
`;



export const MainImage = styled.img`
    border-radius: 20px;
    border: 1px solid #E8E8E8;
    width: 100%;
    margin-top: 20px;
`;