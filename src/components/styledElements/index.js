import styled from 'styled-components/macro';

export const StyledCard = styled.section`
    margin: 10px;
    padding: 25px;
    background-color: #fff;
    border-bottom-left-radius: max(0% + 0px, min(0% + 8px, -999900% + 1.53185e+07px)) 8px;
    border-bottom-right-radius: max(0% + 0px, min(0% + 8px, -999900% + 1.53185e+07px)) 8px;
    border-top-left-radius: max(0% + 0px, min(0% + 8px, -999900% + 1.53185e+07px)) 8px;
    border-top-right-radius: max(0% + 0px, min(0% + 8px, -999900% + 1.53185e+07px)) 8px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;

export const Gap = styled.div`
      width: ${props => props.width ? props.width : 0};
      height: ${props => props.height ? props.height : 0};
`;

export const ProfileImage = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    margin-top: 30px;
`;

export const Name = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.04em;
    color: #161616;
    margin: 10px 0;
`;

export const Description = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: ${props => props.gray ? "rgba(18, 18, 18, 0.40)" : "#121212"};
`;