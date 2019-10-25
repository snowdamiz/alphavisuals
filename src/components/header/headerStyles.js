import styled from 'styled-components';

import Nav from '../../assets/header.svg';
import { media, colors } from '../../variables';

export const HeaderWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    padding: 10px 0;
    display: flex;
    flex-flow: column nowrap;
    // align-items: center;
    background-color: #00949F;
    position: relative;
    z-index: 1;

    ${media.largeTb} {
        height: 100%;
        width: 46%;
        background: url('${Nav}');
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: cover; 
        -webkit-filter: drop-shadow( 4px 6px 12px rgba(0, 0, 0, .7));
        filter: drop-shadow( 4px 6px 12px rgba(0, 0, 0, .7));
    }

    .shadow {
        -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
        filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
      }

    .logoBox {
        margin: 40px 0 0 50px;

        ${media.desktop} {
            margin: 80px 0 0 80px;
        }

        .logo {
            width: 150px;
            height: 75px;
            border: 1px solid white;
        }
    
        .logo2{
            width: 100px;
            height: 50px;
            border: 1px solid white;
        }
    
        .logo3{
            width: 100px;
            height: 50px;
            border: 1px solid white;
        }
    }
`;