import tagStyled from 'styled-components';

export const HeaderContainer = tagStyled.div`
    height: 90px;
    box-shadow: 0px 2px 3px #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
`

export const Logo = tagStyled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const TabGroup = tagStyled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
`

export const Tab = tagStyled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    :hover {
        cursor: pointer;
    }
`
