import React, { useState } from 'react';
import { MdElectricBolt } from 'react-icons/md';
import { WiStars } from 'react-icons/wi';
import { IoOptionsSharp } from 'react-icons/io5';
import { GPTGroup, GPTItem, ToggleButton, Toolbar } from './styles/Options.styles';
import _Text from '../../shared/core/ui/Text';

const Options = ({ curTab }: any) => {

    const [curGPT, setCurGPT] = useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, position: 'relative', alignItems: 'center' }}>
            <GPTGroup>
                <GPTItem style={{ backgroundColor: curGPT == 0 ? '#fff' : '#edecf1' }} onClick={() => setCurGPT(0)}>
                    <MdElectricBolt color={curGPT == 0 ? 'green' : '#777'} />
                    <_Text text='GPT-3.5' color={curGPT == 0 ? 'black' : '#777'} />
                </GPTItem>
                <GPTItem style={{ backgroundColor: curGPT == 1 ? '#fff' : '#edecf1' }} onClick={() => setCurGPT(1)}>
                    <WiStars color={curGPT == 1 ? 'green' : '#777'} />
                    <_Text text='GPT-4' color={curGPT == 1 ? 'black' : '#777'} />
                </GPTItem>
            </GPTGroup>
            {curTab == 1 && <Toolbar>
                <IoOptionsSharp color='#777' size={20} />
                <ToggleButton>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <_Text text='Web access' color='black' weight='600' />
                </ToggleButton>
                <select>
                    <option>1 result</option>
                </select>
                <select>
                    <option>Any time</option>
                </select>
                <select>
                    <option>Any region</option>
                </select>
            </Toolbar>}
        </div>
    )
}

export default Options;