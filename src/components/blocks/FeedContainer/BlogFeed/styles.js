import styled from 'styled-components/macro';

export const Container = styled.div`
    /* padding: 10px; */
    /* min-height: 100px; */
`;

export const StyledBlogCard = styled.section`
    position: relative;
    /* min-height: 150px; */
    border-bottom: 1px solid #EBEEF0;
    padding: 10px;
    cursor: pointer;

    &:hover{
        background-color: #dfd7c342;
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

export const BlogImage = styled.img`
    border-radius: 10px;
    height: 70px;
    width: 70px;
    margin: 10px;
    object-fit:cover;
`;

export const WrapperContent = styled.div`
    margin: 10px 5px;
`;


export const ClockIcon = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 8px;
`;

export const Text = styled.p`
    margin-top: 10px;
    font-weight: ${(props) => props.bold ? 'bold' : 'nor'};
    /* max-width: 600px; */
    /* padding: 25px; */
`;


// START COMENT SECTION
export const IconsWrapper = styled.div`
    margin: 10px;
    display: flex;
`;

export const GrayTextIcon = styled.p`
    /* padding: 25px; */
    color: #687684;
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const LinkIconWrapper = styled.span`
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

// END COMENT SECTION
