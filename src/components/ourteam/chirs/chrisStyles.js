import styled from 'styled-components';
import ProfileIMG from '../../../assets/chris/profileIMG.jpg';
import nextBtn from '../../../assets/nextBtn.svg';
import { colors, fonts, media } from '../../../variables';

export const ChrisWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    max-height: 97vh;

    ${media.mobile} { height: 100vh; }
    ${media.largeMb} { width: 480px; }

    ${media.desktop} {
        flex-flow: row nowrap;
        justify-content: space-around;
        width: 100%;
        padding: 0;
    }

    .profile {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        ${media.desktop} { width: 50%; }

        .image {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            border: 3px solid ${colors.white};
            background-color: ${colors.white};
            background: url(${ProfileIMG});
            background-size: cover;

            ${media.tablet} {
                width: 150px;
                height: 150px;
            }

            ${media.largeTb} {
                width: 170px;
                height: 170px;
            }

            ${media.desktop} {
                width: 200px;
                height: 200px;
                border: 5px solid ${colors.white};
            }
        }

        h2 {
            font-family: ${fonts.test4};
            font-size: 40px;
            color: ${colors.white};
            margin: 40px 0 25px 0;

            ${media.tablet} { font-size: 50px; }

            ${media.desktop} {
                font-size: 70px;
                margin: 35px 0 60px 0;
            }
        }

        p {
            color: ${colors.white};
            text-shadow: 0px 0px 5px gray;
            font-family: ${fonts.primary};
            line-height: 23px;
            text-align: center;
            font-weight: 400;
            margin-bottom: 10px;
            font-size: 15px;
            
            ${media.desktop} { 
                width: 450px;
                line-height: 26px;
            }

            ${media.tablet} {
                font-size: 16px;
            }

            .hidden {
                display: none;
                ${media.desktop} {
                    display: flex;
                }
            }
        }

        button {
            font-family: ${fonts.primary};
            font-size: 15px;
            font-weight: 600;
            border: 3px solid ${colors.white};
            background: transparent;
            color: ${colors.white};
            width: 120px;
            height: 38px;
            margin-top: 12px;

            &:hover {
                background-color: ${colors.white};
                color: ${colors.black};
            }

            // ${media.desktop} { display: none; }
        }

        .viewGallery {
            ${media.desktop} { display: none; }
        }

        .profileNav {
            margin-top: 10px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;

            // ${media.desktop} { display: none; }

            .nextBtn {
                border: 2px solid ${colors.white};
                background-color: ${colors.white};
                border-radius: 50%;
                width: 40px;
                height: 40px;
                margin-top: 10px;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;

                ${media.tablet} {
                    width: 50px;
                    height: 50px;
                }

                img {
                    width: 24px;
                    height: 24px;

                    ${media.tablet} {
                        width: 28px;
                        height: 28px;
                    }
                }

                img.prev { margin-top: -4px; }
                img.next { margin-top: 4px; }

            }
        }
    }

    .chrisGallery {
        display: none;

        ${media.desktop} {
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            align-items: center;
            align-content: center;
            width: 50%;
            height: 100%;
            background-color: ${colors.white};
            padding: 10px;
            z-index: 2;
        }

        .galleryInner {
            justify-content: center;
            flex-flow: row wrap;
            align-items: center;
            align-content: center;

            ${media.desktop} { width: 70%; }
            ${media.largeDt} { width: 78%; }

            // h2 {
            //     font-family: ${fonts.test4};
            //     font-size: 60px;
            //     color: ${colors.black};
            //     margin-bottom: 60px;
            //     text-align: center;
            // }

            .p_imgs {
                max-width: 100px;
                max-height: 140px;
                margin: 8px;
                opacity: 0.8;

                ${media.largeDt} {
                    width: 150px;
                    height: 200px;
                }

                ${media.modern} {
                    max-width: 150px;
                    max-height: 220px;
                }

                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
    }
`;