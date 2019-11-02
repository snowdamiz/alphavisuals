import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const ServicesWrap = styled.div`
    width: 100%;
    border: 1px solid white;
    height: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .service {
        width: 90%;
        // box-shadow: 2px 2px 10px #717171;
        padding: 20px;
        margin-top: 60px;
        margin-bottom: 20px;

        .service_content {
            width: 100%;
            // border: 1px solid red;

            h1 {
                font-size: 44px;
                font-family: ${fonts.test3};
                color: #414141;
            }

            .line {
                width: 60px;
                height: 4px;
                border-radius: 2px;
                background-color: #00CFB2;
                margin-top: 10px;
            }

            .description {
                font-size: 17px;
                font-family: ${fonts.primary};
                margin-top: 26px;

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
                // margin-top: 20px;

                span {
                    font-weight: 500;
                    font-style: italic;
                }
            }
        }

        .service_cta {
            width: 100%;
            // border: 1px solid green;

            button:nth-of-type(1) {
                border: 2px solid #414141;
                background-color: transparent;
                padding: 8px 12px;
                margin-top: 30px;
                font-size: 16px;
                font-family: ${fonts.primary};
                font-weight: 500;
            }

            button:nth-of-type(2) {
                border: none;
                background-color: transparent;
                padding: 8px 12px;
                font-size: 15px;
                font-family: ${fonts.primary}l
                font-weight: 500;
            }
        }
    }
`;