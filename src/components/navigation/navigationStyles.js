import styled from 'styled-components';
import { media, colors } from '../../variables';

export const NavWrap = styled.div`
    width: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 2;

    ${media.largeTb} {
        width: 100%;
    }

    .touch_nav {
        width: 32px;
        height: 28px;
        // border: 1px solid black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        div {
            width: 100%;
            height: 5px;
            background-color: black;
        }
    }

    .nav {
        padding: 12px 0;

        a{
            text-decoration: none;
            margin-right: 26px;
            color: black;
        }
    }
`;