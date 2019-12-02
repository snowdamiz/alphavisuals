import styled from 'styled-components';
import { colors, fonts, media } from '../../variables';

export const BlackFridayWrap = styled.div`
    width: 100%;
    padding: 30px 0;
    // border: 1px solid red;
    background-color: ${colors.primary};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: ${fonts.primary};
        font-size: 24px;
        font-weight: 600;
        color: ${colors.white};
        margin-right: 14px;
    }

    .scheduleBtn {
        text-decoration: none;
        color: ${colors.white};
        border: 3px solid ${colors.white};
        padding: 4px 16px;
        font-weight: 600;
        margin-left: 14px;
    }
`;