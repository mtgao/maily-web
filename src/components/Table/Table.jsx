import React from 'react';
import {
  Table as MaterialTable, 
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    let { data, columnHeaders, columnKeys } = this.state;
    return (
      <MaterialTable>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
              Celebrities
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            {columnHeaders.map( (val) => (
                <TableHeaderColumn>{val}</TableHeaderColumn>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {data.map( (row, index) => (
            <TableRow>
              {columnKeys.map ( (key) => (
                <TableRowColumn>{row[key]}</TableRowColumn>
              ))}
            </TableRow>
            ))}
        </TableBody>
      </MaterialTable>              
    );
  }

}

export default Table;