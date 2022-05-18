import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import { ApolloProvider } from '@apollo/client';
import {clientUri} from './client'
import './index.css';

ReactDOM.render(
  <ApolloProvider client={clientUri}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);