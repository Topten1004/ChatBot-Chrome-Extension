import React from 'react'
import LeftSide from './layouts/LeftSide';
import Container from './layouts/Container';

const Main = () => {
  return (
    <div style={{ display: 'flex' }}>
      <LeftSide />
      <Container />
    </div>
  )
}

export default Main;