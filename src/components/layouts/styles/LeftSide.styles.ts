import tagStyled from 'styled-components';
import LeftSideImg from '../../../assets/leftside.jpg';

export const Container = tagStyled.div`
    background-image: url('${LeftSideImg}');
    width: 300px;
    height: calc(100vh - 10px);
    padding: 5px;
    position: relative;
    box-shadow: 2px 0px 4px #fff;
`

export const NewChat = tagStyled.div`
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px 0px 5px 10px;
    gap: 15px;
`

export const SortKind = tagStyled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
`

export const SortButton = tagStyled.div`
    border: 1px solid white;
    border-radius: 5px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`

export const QueGroup = tagStyled.div`
    display: flex;
    flex-direction: column;
`

export const QueDiv = tagStyled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BottomContainer = tagStyled.div`
    position: absolute;
    left: 5px;
    bottom: 0;
    display: flex;
    flex-direction: column;
`
export const ExtraFaq = tagStyled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
