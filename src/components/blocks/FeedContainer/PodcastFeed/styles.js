import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */


`;

export const StyledPodcastCard = styled.section`
    flex-basis: calc(50% - 20px);
    position: relative;
    margin: 10px auto;
    cursor: pointer;

    &:hover{
        background-color: #dfd7c342;
    }
    &:last-child:nth-child(odd){
        margin: 10px auto 10px 10px
    }

    @media only screen and (max-width: 768px) {
        flex-basis: calc(100% - 20px);
    }  
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const DetailsWrapper = styled.div`
    padding: 5px;
    display: flex;
`;

export const ProfileImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextWrapper = styled.div`
`;

export const TextTitle = styled.p`
    font-weight: bold;
    width: 100%;
    margin: 1px 5px;
`;

export const Text = styled.p`
    width: 100%;
    margin: 5px;
    color: rgba(18,18,18,0.40);
`;

export const TextDuration = styled.p`
    margin: 5px;
    background-color: #0000008c;
    color: #fff;
    position: absolute;
    padding: 5px;
    font-size: 10px;
    border-radius: 5px;
    bottom: 5px;
    right: 5px;
`;