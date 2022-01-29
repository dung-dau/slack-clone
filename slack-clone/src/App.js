import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;