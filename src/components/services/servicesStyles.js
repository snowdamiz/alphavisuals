import styled from 'styled-components';
import { fonts, colors, media } from '../../variables';

export const ServicesWrap = styled.div`
    width: 100%;
    border: 1px solid white;
    height: 50px;

    .service {
        width: 100%;
        border: 1px solid blue;
        padding: 40px;

        .service_content {
            width: 100%;
            // border: 1px solid red;

            h1 {
                font-size: 30px;
                font-family: ${fonts.test4};
                color: #323232;
            }

            .line {

            }

            .description {

            }

            .location {
                
            }
        }

        .service_cta {
            width: 100%;
            border: 1px solid green;
        }
    }
`;