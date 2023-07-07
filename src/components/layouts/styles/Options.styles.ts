import tagStyled from 'styled-components';

export const GPTGroup = tagStyled.div`
    background-color: #edecf1;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
`

export const GPTItem = tagStyled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
`

export const Toolbar = tagStyled.div`
    background-color: #edecf1;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;
    margin-left: 50px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    position: absolute;
    right: 200px;
`

export const ToggleButton = tagStyled.div`
    display: flex;
    align-items: center;
    gap: 5px;

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
}
  
/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
  
/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}
  
.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
  
input:checked + .slider {
    background-color: #2196F3;
}
  
input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}
  
input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
  
/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}
  
.slider.round:before {
    border-radius: 50%;
}
`