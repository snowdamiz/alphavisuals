import styled from 'styled-components';
import { media, colors } from '../../variables';

export const NavWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    // border :1px solid blue;

    ${media.largeTb} {
        width: 100%;
    }

    ${media.desktop} {
        padding: 80px 80px 0 80px;
    }

    .logo {
            display: flex;
            align-items: center;
            flex-flow: row nowrap;

        img {
            width: 94px;
            height: 82px;
            -webkit-filter: drop-shadow( 0 0 20px rgba(0, 0, 0, .7));
            filter: drop-shadow( 0 0 20px rgba(0, 0, 0, .7));
    
            ${media.desktop} {
            }
        }
    
        .socials {
            display: flex;
            flex-flow: row nowrap;
            // margin-top: 40px;

            img {
                width: 26px;
                height: 26px;
                margin-left: 26px;
                -webkit-filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
                filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
            }
        }
    }

    .touch_nav {
        display: flex;
        justify-content: space-between;
        border: 1px solid white;
        align-items: center;
        padding: 15px 22px;
        border-radius: 28px;
        background-color: white;
        height: 62px;
        margin-top: 5px;
        box-shadow: 0 0 30px black;

        ${media.desktop} {
        }


        .bars {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            height: 20px;
            // border: 1px solid white;

            div {
                width: 30px;
                height: 4px;
                background-color: black;
            }
        }

        p {
            // border: 1px solid white;
            color: black;
            padding-left: 14px;
            font-size: 18px;
            font-weight: bold;
            padding-top: 2px;
        }


    }

    .nav {
        padding: 12px 0;
        position: absolute;

        a{
            text-decoration: none;
            margin-right: 26px;
            color: black;
        }
    }
`;