import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const ContactWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    padding: 40px 20px;
    background-color: #04292D;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    ${media.largeTb} {
        padding: 80px 20px;
    }

    ${media.desktop} {
        padding: 100px 20px;
    }

    h1 {
        font-family: ${fonts.test3};
        color: white;
        font-size: 42px;
        margin: 40px 0;

        ${media.largeTb} { font-size: 50px; }
        ${media.desktop} { font-size: 58px; }
    }

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin: 20px 0;

        ${media.desktop} { margin: 40px 0; }

        input {
            width: 300px;
            border: none;
            padding: 10px;
            margin-top: 10px;
            font-family: ${fonts.primary};
            font-size: 16px;
        }

        textarea {
            width: 300px;
            height: 140px;
            border: none;
            padding: 10px;
            margin-top: 10px;
            font-family: ${fonts.primary};
            font-size: 16px;
        }
    }
`;