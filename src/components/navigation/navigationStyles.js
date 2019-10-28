import styled from 'styled-components';
import { media, colors } from '../../variables';

import Logo from '../../assets/logo.png';

export const NavWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    align-items: center;
    z-index: 2;
    padding: 15px 15px 0 15px;
    // border :1px solid blue;

    ${media.largeMb} { padding: 16px 16px 0 16px; }
    ${media.tablet} { padding: 18px 18px 0 18px; }
    ${media.largeTb} { padding: 22px 22px 0 22px; }
    ${media.desktop} { padding: 26px 26px 0 26px; }
    ${media.largeDt} { padding: 30px 30px 0 30px; }
    ${media.modern} { padding: 40px 40px 0 40px; }

    .logo {
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            background: url('${Logo}');
            background-size: cover;
            width: 60px;
            height: 54px;
            // margin: 14px 0 0 14px;

            ${media.largeMb} {
                // margin: 16px 0 0 16px;
                width: 64px;
                height: 56px;
            }

            ${media.tablet} {
                // margin: 18px 0 0 18px;
                width: 68px;
                height: 60px;
            }

            ${media.largeTb} {
                // margin: 20px 0 0 20px;
                width: 70px;
                height: 62px;
            }

            ${media.desktop} {
                // margin: 22px 0 0 22px;
                width: 74px;
                height: 65px;
            }

            ${media.largeDt} {
                // margin: 26px 0 0 26px;
                width: 80px;
                height: 70px;
            }

            ${media.modern} {
                // margin: 40px 0 0 40px;
                width: 100px;
                height: 88px;
            }

        // img {
        //     width: 94px;
        //     height: 82px;
        //     -webkit-filter: drop-shadow( 0 0 20px rgba(0, 0, 0, .7));
        //     filter: drop-shadow( 0 0 20px rgba(0, 0, 0, .7));
    
        //     ${media.desktop} {
        //     }
        // }
    
        // .socials {
        //     display: flex;
        //     flex-flow: row nowrap;
        //     // margin-top: 40px;

        //     img {
        //         width: 26px;
        //         height: 26px;
        //         margin-left: 26px;
        //         -webkit-filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
        //         filter: drop-shadow( 0 3px 6px rgba(0, 0, 0, .7));
        //     }
        // }
    }

    .touch_nav {
        display: flex;
        justify-content: space-between;
        border: 1px solid white;
        align-items: center;
        padding: 10px 16px;
        border-radius: 20px;
        background-color: white;
        height: 44px;
        // margin: 0 10px 0 0;
        box-shadow: 0 0 30px black;

        ${media.tablet} {
            height: 46px;
            border-radius: 22px;
            padding: 12px 18px;
        }

        ${media.largeTb} {
            height: 48px;
            border-radius: 24px;
            padding: 14px 20px;
        }   

        ${media.desktop} {
            height: 52px;
            border-radius: 26px;
            padding: 14px 22px;
        }

        .bars {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            height: 20px;
            // border: 1px solid white;

            div {
                width: 26px;
                height: 4px;
                background-color: black;
            }
        }

        p {
            // border: 1px solid white;
            color: black;
            padding-left: 14px;
            font-size: 16px;
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