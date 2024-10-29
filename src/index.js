import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  extendTheme,
  ChakraProvider,
  CSSReset,
  ThemeProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  primary: '#3f51b5',
  secondary: '#f50057',
};

const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Roboto, sans-serif',
};

const theme = extendTheme({ colors, fonts, config: { initialColorMode: 'light' } });

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page content.</p>
    </div>
  );
}

function NotFound() {
  return <h2>404 Not Found</h2>;
}

function ImprovedApp() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

ReactDOM.render(<ImprovedApp />, document.getElementById('root'));
