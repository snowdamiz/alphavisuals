import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const DjWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    padding: 80px 0;
    background-color: #1b191a;
    display: flex;
    flex-flow: column nowrap;
    jusity-content: center;
    aling-items: center;

    ${media.tablet} {
        padding: 100px 0;
    }

    ${media.largeTb} {
        padding: 120px 0;
    }

    .djCont {
        margin: 0px auto;
        width: 90%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        ${media.desktop} {
            width: 1000px;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        .djText {
            // ${media.desktop} {
            //     display: flex;
            //     flex-flow: column nowrap;
            //     justify-content: flex-start;
            //     align-items: flex-start;
            // }

            h1 {
                font-family: ${fonts.test4};
                color: ${colors.white};
                font-size: 40px;
                text-align: center;

                ${media.tablet} {
                    font-size: 50px;
                }

                ${media.largeTb} {
                    font-size: 54px;
                }

                ${media.desktop} {
                    text-align: left;
                    font-size: 68px;
                }
            }

            p {
                margin-top: 20px;
                font-family: ${fonts.primary};
                color: ${colors.white};
                font-size: 14px;
                text-align: center;
                line-height: 21px;

                ${media.tablet} {
                    font-size: 15px;
                }

                ${media.largeTb} {
                    font-size: 16px;
                    line-height: 22px;
                }

                ${media.desktop} {
                    text-align: left;
                    font-size: 17px;
                    margin: 32px 0 0 5px;
                    line-height: 23px;
                }
            }

            button {
                display: none;
                margin: 0px auto;
                width: 150px;
                padding: 12px 0;
                background-color: ${colors.primary};
                border: 1px solid ${colors.primary};
                font-family: ${fonts.primary};
                color: ${colors.white};
                border-radius: 4px;
                font-size: 16px;
        
                &:hover {
                    background-color: ${colors.white};
                    border: 1px solid ${colors.white};
                    color: ${colors.black};
                }

                ${media.desktop} {
                    display: inline-block;
                    margin-top: 110px;
                }
            }
        }

        img {
            width: 220px;
            margin: 40px 0;
            
            ${media.tablet} {
                width: 280px;
            }

            ${media.largeTb} {
                width: 320px;
            }

            ${media.desktop} {
                width: 400px;
            }
        }
    }

    button {
        margin: 0px auto;
        width: 130px;
        padding: 10px 0;
        background-color: ${colors.primary};
        border: 1px solid ${colors.primary};
        font-family: ${fonts.primary};
        color: ${colors.white};
        border-radius: 4px;
        font-size: 15px;

        &:hover {
            background-color: ${colors.white};
            border: 1px solid ${colors.white};
            color: ${colors.black};
        }

        ${media.desktop} {
            display: none;
        }
    }

    .flyer {
        // position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            margin-bottom: 20px;

            ${media.tablet} {
                width: 500px;
            }

            ${media.largeTb} {
                width: 700px;
            }

            ${media.desktop} {
                justify-content: flex-start;
            }
        }
    }
`;