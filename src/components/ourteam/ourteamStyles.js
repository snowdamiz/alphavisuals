import styled from 'styled-components';
import ProfileIMG from '../../assets/bryan/profileIMG.jpg';
import { colors, fonts, media } from '../../variables';

export const OurteamWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: colum nowrap;
    background-color: ${colors.primary};

    .inner {
        width: 100%;
        // border: 1px solid blue;
        // padding: 80px 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        .section {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 42px;
            height: 100vh;

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

                ${media.desktop} {
                    width: 50%;
                }

                .image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 3px solid ${colors.white};
                    background-color: ${colors.white};
                    background: url(${ProfileIMG});
                    background-size: cover;
    
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
                    font-size: 50px;
                    color: ${colors.white};
                    margin: 50px 0 25px 0;

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
                    
                    ${media.desktop} { 
                        width: 450px;
                        line-height: 26px;
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
                    font-size: 16px;
                    font-weight: 600;
                    border: 3px solid ${colors.white};
                    background: transparent;
                    color: ${colors.white};
                    width: 120px;
                    height: 38px;
                    margin-top: 20px;
    
                    &:hover {
                        background-color: ${colors.white};
                        color: ${colors.black};
                    }
    
                    // ${media.desktop} { display: none; }
                }
    
                .profileNav {
                    margin-top: 50px;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
    
                    ${media.desktop} { display: none; }
    
                    .nextBtn {
                        border: 2px solid ${colors.white};
                        background-color: ${colors.white};
                        border-radius: 50%;
                        // position: absolute;
                        width: 50px;
                        height: 50px;
                        margin-top: 10px;
                    }
                }
            }

            .bryanGallery {
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
                        max-height: 150px;
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
        }
    }
`;