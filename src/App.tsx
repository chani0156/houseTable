import React from 'react';
import logo from './logo.svg';
import './App.css';
import HouseForm from './components/houseForm/HouseForm';
import AppRoute from './AppRoute';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <AppRoute />
    </div>
  );
}

export default App;
