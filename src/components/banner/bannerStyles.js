import styled from 'styled-components';
import Banner from '../../assets/banner.jpg';

export const BannerWrap = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid green;
    position: absolute;
    background: url('${Banner}');
    background-position: center;
    background-size: cover;
    z-index: -1;
`;