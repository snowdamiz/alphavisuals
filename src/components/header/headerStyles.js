import styled from 'styled-components';
import { media } from '../../variables';

export const HeaderWrap = styled.div`
    width: 100%;
    border: 1px solid red;
    padding: 10px 0;
    background-color: #00949F;

    ${media.largeTb} {
        height: 100%;
        width: 36%;


    }
`;