import React from 'react';
import App from './App/index.js';
import { ApolloProvider } from '@apollo/client';
import { clientUri } from './client'
import './index.css';
import { createRoot } from "react-dom/client" 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={clientUri}>
    <App />
  </ApolloProvider>,
);