import styled from 'styled-components';
import { media, colors, fonts } from '../../variables';

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
        // box-shadow: 0 0 30px black;
        cursor: pointer;

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
        display: flex;
        flex-flow: column nowrap;
        background-color: white;
        border: 1px solid white;
        border-radius: 20px;
        align-items: center;
        right: 15px;
        top: 76px;
        width: 120px;

        ${media.tablet} {
            border-radius: 26px;
            right: 20px;
            top: 84px;
        }

        ${media.largeTb} {
            border-radius: 24px;
            top: 90px;
            right: 24px;
        }   

        ${media.desktop} {
            border-radius: 26px;
            top: 96px;
            right: 26px;
            width: 130px;
        }
        
        ${media.largeDt} {
            top: 104px;
            right: 30px;
        }

        ${media.modern} {
            top: 118px;
            right: 40px;
        }

        a{
            text-decoration: none;
            // margin-right: 26px;
            color: black;
            font-family: ${fonts.primary};
            font-weight: 500;
            padding: 4px 0;

             &:hover {
                 color: ${colors.primary};
             }
        }
    }
`;