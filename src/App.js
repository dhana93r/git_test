// src/App.js
import React from 'react';
import StockRatiosList from './components/StockRatiosList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
      <StockRatiosList />
    </Container>
  );
}

export default App;
