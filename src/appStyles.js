import styled from 'styled-components';
import { media } from './variables';

export const AppWrap = styled.div`
    // border: 1px solid blue;
    width: 100%;

    ${media.largeTb} {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 100%;
        position: absolute;
    }

    .r_sec {
        ${media.largeTb} {
            display: flex;
            align-items: flex-end;
            flex-flow: column nowrap;
            width: 100%;
        }
    }
`;