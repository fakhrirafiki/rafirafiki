import styled from 'styled-components/macro';

export const Container = styled.div`
`;

export const Input = styled.textarea`
    margin: 10px 0 10px 10px  ;
    border: 0px;
    border-bottom: 1px solid #cccccc;
    background-color: #fff;
    min-width: calc(100% - 70px);
    max-width: calc(100% - 70px);

    &:focus {
        outline: none;
        border-bottom: 1px solid #000000b0;
    }
`;

export const InputCommentWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 10px;
`;

export const UserCommentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`;

export const DetailsWrapper = styled.div`
    margin: 13px 0 10px 10px;
    max-width: calc(100% - 70px);
`;

export const TextName = styled.p`
    font-weight: bold;
`;

export const TextComment = styled.p`
    margin-top: 5px;
`;

export const GrayTextIcon = styled.span`
    color: #687684;
    padding-left: 5px;
    font-weight: normal;
`;


export const ClockIcon = styled.img`
`;
