import styled from 'styled-components';
import { media } from '../../variables';

export const NavWrap = styled.div`
    width: 100%;
    border: 1px solid green;
    padding: 10px 0;

    ${media.largeTb} {
        width: 100%;
    }
`;