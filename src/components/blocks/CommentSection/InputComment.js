import React, { useState } from 'react';
import { InputCommentWrapper, Input } from './styles';
import { ProfileImageRounded } from '../../styledElements';
import Button from '../../elements/Button';
import { profileImg } from '../../../assets';
import { MAX_CHAR_FOR_INPUT } from '../../../constants';

function InputComment() {
    const [inputState, setInputState] = useState({
        value: '',
        rows: 2,
        minRows: 2,
    });

    const handleInputChange = (event) => {
        const textareaLineHeight = 15;
        const { minRows } = inputState;

        if (event.target.value.length >= +MAX_CHAR_FOR_INPUT) return false;

        event.target.rows = minRows; // reset number of rows in textarea 
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
        event.target.rows = currentRows;

        setInputState({
            ...inputState,
            value: event.target.value,
        });
    };

    return (
        <InputCommentWrapper>
            <ProfileImageRounded src={profileImg} />
            <Input
                placeholder="Commnets or suggestions? type here..."
                onChange={handleInputChange}
                value={inputState.value}
            />
            <Button right size='small' secondary={!inputState.value}>Comment</Button>
        </InputCommentWrapper>
    );
}

export default InputComment;
