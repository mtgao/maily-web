import React from 'react';
import Table from '../Table';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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

const columnHeader = [
  'First Name',
  'Last Name',
  'Native Name',
  'Gender',
  'Occupation',
  'Date of Birth'
]

const columnKey = [
  'firstname',
  'lastname',
  'fullname_native',
  'gender',
  'occupation',
  'dob'
]

class Celebrities extends React.Component {
  render() {
    return (

      <Query query={GET_CELEBRITY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return (
            <Table 
            data={data.celebrity} 
            columnHeaders={columnHeader}
            columnKeys={columnKey}
            />              
          )
        }}
      </Query>
    );
  }

}

export default Celebrities;