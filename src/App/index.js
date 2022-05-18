import React from 'react';
import { CountriesProvider } from '../countriesContext';
import { AppUI } from './AppUI';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CountriesProvider>
      <AppUI />
    </CountriesProvider>
  );
}

export default App;
