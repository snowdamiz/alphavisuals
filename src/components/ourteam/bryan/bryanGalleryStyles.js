import styled from 'styled-components';
import { colors, fonts, media } from '../../../variables';

export const BryanGalleryWrap = styled.div`
    width: 90%;
    height: 85%;
    background-color: ${colors.white};
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    .galleryHeading {
        width: 100%;
        height: 70px;
        background-color: ${colors.gray};
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-family: ${fonts.test4};
            color: ${colors.white};
            font-size: 24px;
            margin-left: 18px;
        }
        
        img {
            width: 22px;
            height: 22px;
            margin-right: 18px;
            color: ${colors.white};
            cursor: pointer;
        }
    }

    .galleryInner {
        justify-content: center;
        // flex-flow: row wrap;
        align-items: center;
        align-content: center;
        // border: 1px solid red;
        width: 300px;
        margin-top: 10px;

        // ${media.mobile} {
        //     width: 350px;
        // }

        ${media.tablet} {
            width: 500px;
            margin-top: 60px;
        }
        ${media.largeTb} {
            width: 620px;
            margin-top: 90px;
        }

        // ${media.desktop} { width: 70%; }
        // ${media.largeDt} { width: 78%; }

        // h2 {
        //     font-family: ${fonts.test4};
        //     font-size: 60px;
        //     color: ${colors.black};
        //     margin-bottom: 60px;
        //     text-align: center;
        // }

        .p_imgs {
            max-width: 80px;
            max-height: 120px;
            margin: 8px;
            opacity: 0.8;

            // ${media.mobile} {
            //     max-width: 120px;
            //     max-height: 160px;
            // }

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
`;

export const ImgView = styled.div`
    // border: 1px solid red;
    background-color: ${colors.white};
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;

    .imgHeading {
        width: 100%;
        height: 70px;
        background-color: ${colors.gray};
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        
        img {
            width: 22px;
            height: 22px;
            margin-right: 18px;
            color: ${colors.white};
            cursor: pointer;
        }
    }

    .img {
        max-width: 100%;
        max-height: 500px;
        // margin-top: 40px;
        padding: 20px;

        ${media.mobile} {
            max-height: 540px;
        }

        ${media.tablet} {
            max-height: 600px;
        }
    }
`;