import tagStyled from 'styled-components';
import MainImg from '../../../assets/main.jpg';

export const MainLayout = tagStyled.div`
    background-image: url("${MainImg}");
    background-size: 100% 100%;
    width: calc(100% - 310px );
    height: 100vh;
    background-color: black;
`