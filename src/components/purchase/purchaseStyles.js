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
            font-size: 40px;
            color: ${colors.white};
            text-align: center;
            width: 300px;
            ${media.mobile} {
                font-size: 44px; line-height:
                28px;
                padding: 5px 0;
            }
            ${media.largeMb} {
                font-size: 46px;
                line-height: 30px;
                padding: 10px 0;
            }
            ${media.tablet} {
                font-size: 48px;
                line-height: 32px;
                padding: 14px 0;
            }
            ${media.largeTb} {
                font-size: 50px; 
                line-height: 34px;
                padding: 20px 0;
            }
            ${media.desktop}
            {
                font-size: 54px;
                line-height: 38px;
                padding: 24px 0;
            }

        }

        .form {
            margin-top: 50px;
            // border: 1px solid blue;
            display: flex;
            flex-flow: column nowrap;
            jusfity-content: center;
            align-items: center;

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
                ${media.largeTb} { width: 500px; min-height: 240px; }
                ${media.desktop} { width: 500px; min-height: 250px; }
            }

            .btns {
                // border: 1px solid red;
                width: 100%;
                margin-top: 20px;

                .back {
                    padding: 10px 30px;
                    text-decoration: none;
                    border: 2px solid ${colors.white};
                    color: ${colors.white};
                    background-color: transparent;
                    text-align: center;
                    font-family: ${fonts.primary};
                    &:hover {
                        background-color: ${colors.white};
                        color: ${colors.black};
                    }
                    ${media.mobile} { padding: 10px 35px; }
                    ${media.largeMb} { padding: 10px 40px; }
                    ${media.tablet} {
                        padding: 10px 45px;
                        border: 3px solid ${colors.white};
                        font-size: 18px;
                    }
                    ${media.largeTb} { padding: 10px 70px; }

                }
            }
        }
    }
`;