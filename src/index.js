import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
  body: 'Roboto, sans-serif', // Replace 'Roboto' with your desired font
  heading: 'Roboto, sans-serif', // Replace 'Roboto' with your desired font
};

const theme = extendTheme({ colors, fonts });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
