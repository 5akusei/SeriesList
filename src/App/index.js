import React from 'react';
import { SerieProvider } from '../SerieContext';
import { AppUI } from './AppUI';
// import './App.css';

function App() {
  return (
    <SerieProvider>
      <AppUI />
    </SerieProvider>
  );
}

export default App;
