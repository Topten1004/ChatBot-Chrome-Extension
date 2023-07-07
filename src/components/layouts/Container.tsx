import React, { useState } from 'react'
import { MainLayout } from './styles/Container.styles';
import Header from './Header';
import Options from './Options';
import Workspace from './Workspace';

const Container = () => {

    const [curTab, setCurTab] = useState(0);

    return (
        <MainLayout>
            <Header curTab={curTab} setCurTab={setCurTab} />
            <Options curTab={curTab} />
            <Workspace curTab={curTab} />
        </MainLayout>
    )
}

export default Container;