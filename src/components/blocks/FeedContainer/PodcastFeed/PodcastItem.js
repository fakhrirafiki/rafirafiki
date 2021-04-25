import React from 'react';
import { useHistory } from 'react-router-dom';
import { PODCAST_TEXT } from '../../../../constants';

import { StyledPodcastCard, ThumbnailImage, DetailsWrapper, ProfileImage, TextWrapper, TextTitle, Text, TextDuration, ImageWrapper } from './styles';

import { profileImg } from '../../../../assets';

function PodcastFeed() {
    let history = useHistory();
    const handleClickPodcast = () => {
        history.push(`/${PODCAST_TEXT}/asd`);
    };

    return (
        < StyledPodcastCard onClick={handleClickPodcast}>
            <ImageWrapper>
                <ThumbnailImage src="https://images.wallpaperscraft.com/image/lioness_predator_big_cat_204171_3840x2160.jpg" />
                <TextDuration>16:44</TextDuration>
            </ImageWrapper>
            <DetailsWrapper>
                <ProfileImage src={profileImg} />
                <TextWrapper>
                    <TextTitle >Lorem ipsum dolor sit amet dolor ipsum ya ini lahs </TextTitle>
                    <Text>Ini Penjelasannya</Text>
                </TextWrapper>
            </DetailsWrapper>
        </StyledPodcastCard>
    );
}

export default PodcastFeed;
