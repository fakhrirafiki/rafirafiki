import React from 'react';
import { UserCommentWrapper, DetailsWrapper, TextName, TextComment, GrayTextIcon } from './styles';
import { ProfileImageRounded } from '../../styledElements';
import { profileImg } from '../../../assets';

function UserComment() {
    return (
        <UserCommentWrapper>
            <ProfileImageRounded src={profileImg} />
            <DetailsWrapper>
                <TextName>Rafi Rafiki <GrayTextIcon> ∙∙∙ 10 days ago</GrayTextIcon></TextName>
                <TextComment>You make me want tI borrow that tou make me want to steal your wardrobe. P.S. Can I that top?You make me want to steal your wardran I borrow that top?</TextComment>
            </DetailsWrapper>
        </UserCommentWrapper>
    );
}

export default UserComment;
