import React from 'react';
import LeftSide from './layouts/LeftSide';
import Container from './layouts/Container';
import Login from './Login';

const Main = () => {
  // Get token from localStorage
  const token = localStorage.getItem('token');

  return (
    <div style={{ display: 'flex' }}>
      {token ? (
        <>
          <LeftSide />
          <Container />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Main;
