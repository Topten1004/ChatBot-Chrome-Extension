import React, { useState } from 'react';
import { GiBrain } from 'react-icons/gi';
import { HeaderContainer, Logo, Tab, TabGroup } from './styles/Header.styles';
import _Text from '../../shared/core/ui/Text';

const Header = ({curTab, setCurTab}: any) => {

    return (
        <HeaderContainer>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Logo>
                    <GiBrain size={32} color='white' />
                    <_Text text='OpenAI ChatGPT' size={24} weight='800' />
                </Logo>
                <_Text text='Powered By' />
                <_Text text='PROFESSIONISTA AI' size={20} weight='600' />
            </div>
            <div style={{ display: 'flex', gap: '50px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <_Text text='Utente : Gianluca' />
                    <_Text text='Santorelli' />
                </div>
                <_Text text='Esci' />
            </div>
            <TabGroup>
                <Tab style={{ backgroundColor: curTab == 0 ? 'white': 'black' }} onClick={() => setCurTab(0)}>
                    <_Text text='Seleziona Attività' color={curTab == 0 ? 'black' : 'white'} />
                </Tab>
                <Tab style={{ backgroundColor: curTab == 1 ? 'white': 'black' }} onClick={() => setCurTab(1)}>
                    <_Text text='Dossier' color={curTab == 1 ? 'black' : 'white'} />
                </Tab>
            </TabGroup>
        </HeaderContainer>
    )
}

export default Header;