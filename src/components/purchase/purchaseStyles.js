import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const PurchaseWrap = styled.div`
    background-color: ${colors.black};
    min-height: 100vh;
    position: relative;
    // display: flex;
    // flex-flow: row nowrap;
    // justify-content: center;
    // align-items: center;
    // border: 1px solid red;

    .purchaseInner {
        padding-top: 60px;
        position: relative;
        // border: 1px solid red;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        // width: 80%;
        

        h1 {
            font-family: ${fonts.test3};
            font-size: 30px;
            color: ${colors.white};
            text-align: center;
            width: 300px;
            ${media.mobile} {
                font-size: 34px;
                line-height: 28px;
                padding: 5px 0;
            }
            ${media.largeMb} {
                font-size: 36px;
                line-height: 30px;
                padding: 10px 0;
            }
            ${media.tablet} {
                font-size: 38px;
                line-height: 32px;
                padding: 14px 0;
            }
            ${media.largeTb} {
                font-size: 40px; 
                line-height: 34px;
            }
            ${media.desktop}
            {
                font-size: 46px;
                line-height: 38px;
            }

        }

        .form {
            margin-top: 40px;
            margin-bottom: 40px;
            // border: 1px solid blue;
            display: flex;
            flex-flow: column nowrap;
            jusfity-content: center;
            align-items: center;

            label {
                font-family: ${fonts.primary};
                font-size: 15px;
                color: red;
            }

            input {
                // text-align: center;
                // width :80%;
                width: 300px;
                height: 44px;
                border: 1px solid ${colors.lightGray};
                background-color: ${colors.gray};
                margin-bottom: 14px;
                color: ${colors.white};
                padding: 0 10px 0 10px;
                font-size: 17px;
                font-family: ${fonts.primary};
                ${media.mobile} { width: 320px; }
                ${media.largeMb} { width: 340px; height: 46px; }
                ${media.tablet} { width: 400px; height: 48px; }
                ${media.largeTb} { width: 500px; height: 50px; }
                ${media.desktop} { width: 500px; height: 54px; }
            }

            select {
                width: 300px;
                height: 44px;
                border: 1px solid ${colors.lightGray};
                background-color: ${colors.gray};
                margin-bottom: 14px;
                color: ${colors.white};
                padding: 0 10px 0 10px;
                font-size: 17px;
                font-family: ${fonts.primary};
                ${media.mobile} { width: 320px; }
                ${media.largeMb} { width: 340px; height: 46px; }
                ${media.tablet} { width: 400px; height: 48px; }
                ${media.largeTb} { width: 500px; height: 50px; }
                ${media.desktop} { width: 500px; height: 54px; }

                option {
                    width: 300px;
                    height: 44px;
                    border: 1px solid ${colors.lightGray};
                    background-color: ${colors.gray};
                    margin-bottom: 14px;
                    color: ${colors.white};
                    padding: 0 10px 0 10px;
                    font-size: 17px;
                    font-family: ${fonts.primary};
                    ${media.mobile} { width: 320px; }
                    ${media.largeMb} { width: 340px; height: 46px; }
                    ${media.tablet} { width: 400px; height: 48px; }
                    ${media.largeTb} { width: 500px; height: 50px; }
                    ${media.desktop} { width: 500px; height: 54px; }
                }
            }

            textarea {
                width: 300px;
                min-height: 180px;
                padding: 10px;
                font-family: ${fonts.primary};
                border: 1px solid white;
                ${media.mobile} { width: 320px; }
                ${media.largeMb} { width: 340px; min-height: 200px; }
                ${media.tablet} { width: 400px; min-height: 220px; }
                ${media.largeTb} { width: 500px; }
                ${media.desktop} { width: 500px; }
            }

            .btns {
                // border: 1px solid red;
                width: 100%;
                margin-top: 20px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;

                .back {
                    padding: 10px 30px;
                    width: 120px;
                    text-decoration: none;
                    border: 3px solid ${colors.white};
                    color: ${colors.white};
                    background-color: transparent;
                    text-align: center;
                    font-family: ${fonts.primary};
                    margin-right: 6px;
                    &:hover {
                        background-color: ${colors.white};
                        color: ${colors.black};
                    }

                    ${media.tablet} {
                        // padding: 10px 45px;
                        border: 3px solid ${colors.white};
                        font-size: 18px;
                    }

                }

                .submit {
                    padding: 13px 30px;
                    width: 120px;
                    text-decoration: none;
                    border: 3px solid ${colors.white};
                    color: ${colors.white};
                    background-color: transparent;
                    text-align: center;
                    font-family: ${fonts.primary};
                    margin-left: 6px;
                    &:hover {
                        background-color: ${colors.white};
                        color: ${colors.black};
                    }
                    
                    ${media.tablet} {
                        // padding: 10px 45px;
                        border: 3px solid ${colors.white};
                        font-size: 18px;
                    }
                }

                // .stripeBtn {
                //     border: 3px solid ${colors.primary} !important;
                //     margin-left: 20px !important;
                //     font-family: ${fonts.primary} !important;
                // }

                // .stripeBtn,
                // .stripeBtn>span {
                //     margin-top: -3px !important;
                //     border-radius: 0px !important;
                //     // border: 3px solid ${colors.white} !important;
                //     background-color: ${colors.primary} !important;
                //     background-image: none !important;
                //     font-family: ${fonts.primary} !important;
                //     width: 120px;
                //     height: 53px;
                //     margin: 0px !important;
                //     box-shadow: none !important;
                // }
            }
        }
    }
`;