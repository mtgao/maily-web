import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table, 
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {ApolloClient, gql} from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache()
});
const GET_CELEBRITY = gql`
  {
    celebrity {
      firstname
      lastname
      firstname_birth
      lastname_birth
      fullname_native
      dob
      gender
      occupation
    } 
  }
`

class CelebrityList extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <Query query={GET_CELEBRITY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;

              return (
                <Table>
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                  >
                    <TableRow>
                      <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                        Celebrities
                      </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                      <TableHeaderColumn>First Name</TableHeaderColumn>
                      <TableHeaderColumn>Last Name</TableHeaderColumn>
                      <TableHeaderColumn>Native Name</TableHeaderColumn>
                      <TableHeaderColumn>Gender</TableHeaderColumn>
                      <TableHeaderColumn>Occupation</TableHeaderColumn>
                      <TableHeaderColumn>Date of Birth</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                  >
                    {data.celebrity.map( (row, index) => (
                      <TableRow>
                        <TableRowColumn>{row.firstname}</TableRowColumn>
                        <TableRowColumn>{row.lastname}</TableRowColumn>
                        <TableRowColumn>{row.fullname_native}</TableRowColumn>
                        <TableRowColumn>{row.gender}</TableRowColumn>
                        <TableRowColumn>{row.occupation}</TableRowColumn>
                        <TableRowColumn>{row.dob}</TableRowColumn>
                      </TableRow>
                      ))}
                  </TableBody>
                </Table>              
              )
            }}
          </Query>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }

}

// ========================================

ReactDOM.render(
  <CelebrityList/>,
  document.getElementById('root')
);