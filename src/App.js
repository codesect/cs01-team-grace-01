import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import SampleGraphqlCall from './SampleGraphqlCall';

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>WhoCalledMe App with GraphQL + Netlify Lambda</h1>
        </header>
        <SampleGraphqlCall />
      </div>
    </ApolloProvider>
  );
}

export default App;
