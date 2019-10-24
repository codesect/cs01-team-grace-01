import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lookup from './pages/Lookup';
import NotFound from './pages/NotFound';
import SampleGraphqlCall from './components/SampleGraphqlCall';

import defaultTheme from './themes';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: '/.netlify/functions/lambda',
});

const Root = () => (
  <ThemeProvider theme={defaultTheme}>
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Home path="/" />
        <SampleGraphqlCall path="/example" />
        <Lookup path="/lookup/:number" />
        <NotFound default />
      </Router>
      <Footer />
      <GlobalStyles />
    </ApolloProvider>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
