import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Can find root element!');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
