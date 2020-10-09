import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const ServicesWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    // height: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .service_sec {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        &:nth-of-type(5) {
            margin-bottom: 90px;
        }

        ${media.largeMb} {
            width: 480px;
        }

        ${media.largeTb} {
            width: 90%;
            // border: 1px solid red;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        ${media.desktop} {
            width: 1000px;
        }
        
        .service {
            width: 90%;
            // box-shadow: 2px 2px 10px #717171;
            padding: 20px;
            margin-top: 60px;
            margin-bottom: 20px;
            // border: 1px solid red;
            
            ${media.largeMb} {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                margin-top: 100px;
                margin-bottom: 40px;
            }

            ${media.largeTb} {
                width: 440px;
                margin-top: 120px;
                margin-bottom: 50px;
            }

            ${media.desktop} {
                margin-top: 140px;
                margin-bottom: 60px;
            }
    
            .service_content {
                width: 100%;
                // border: 1px solid red;
                // ${media.largeMb} {
                //     display: flex;
                //     flex-flow: column nowrap;
                //     justify-content: center;
                //     // align-items: center;
                // }
    
                h1 {
                    font-size: 44px;
                    font-family: ${fonts.test3};
                    color: #414141;
                }
    
                .line {
                    width: 60px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #EB6123;
                    margin-top: 10px;
                }
    
                .description {
                    font-size: 17px;
                    font-family: ${fonts.primary};
    
                    span {
                        font-weight: 500;
                        font-style: italic;
                    }
                }
    
                .location {
                    font-size: 17px;
                    font-family: ${fonts.primary};
                    // margin-top: 20px;
    
                    span {
                        font-weight: 500;
                        font-style: italic;
                    }
                }
    
                .price {
                    font-size: 17px;
                    font-family: ${fonts.primary};
                    margin-top: 30px;
    
                    span {
                        font-weight: 500;
                        font-style: italic;

                        a {
                            color: ${colors.black};
                        }
                    }
                }
            }
    
            .service_cta {
                width: 100%;
                margin-top: 20px;
                // border: 1px solid green;
                // text-align: center;
    
                .button:nth-of-type(1) {
                    border: 2px solid #414141;
                    background-color: transparent;
                    padding: 8px 12px;
                    font-size: 16px;
                    font-family: ${fonts.primary};
                    font-weight: 500;
                    color: ${colors.black};
                    text-decoration: none;
                }
    
                .button:nth-of-type(2) {
                    border: none;
                    background-color: transparent;
                    padding: 8px 12px;
                    font-size: 15px;
                    font-family: ${fonts.primary}l
                    font-weight: 500;
                }
            }
        }
    }
`;