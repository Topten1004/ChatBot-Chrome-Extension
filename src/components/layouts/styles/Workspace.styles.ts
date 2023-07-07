import tagStyled from 'styled-components';

export const Button = tagStyled.button`
    width: 200px;
    height: 50px;
`

export const WorkBoard = tagStyled.div`
    padding: 30px 50px 0px 30px;
    position: relative;
    height: 75%;
    table {
        border-collapse: collapse;
    }
    tr, td {
        border: 3px solid white;
        color: white;
    }
    td {
        padding: 5px;
    }
`

export const DetailGroup = tagStyled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    width: 97%;
`

export const WhatsappButton = tagStyled.button`
    position: absolute;
    bottom: -10px;
    right: 30px;
    background-color: green;
    border-radius: 20px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Settings = tagStyled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    position: absolute;
    bottom: 30px;
    width: calc(100% - 310px);
    border-radius: 5px;
`

export const Select = tagStyled.select`
    padding: 5px;
    padding-right: 30px;
`
