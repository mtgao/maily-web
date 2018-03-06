import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Celebrities from '../Celebrities';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <Celebrities />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }

}

export default App;