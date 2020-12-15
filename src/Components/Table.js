import React from 'react';
import '../App.css';
import TableRow from './TableRow';

function Table(props) {

    let headers = Object.keys(props.data[0])

    return (
        <table>
            <tr>
                { 
                //Create the column headers
                headers.map(header => <th> {header} </th>)
                }
            </tr>
            {
                //Scroll through the entries
                props.data.map(
                    (element, index) => (
                        <TableRow headers={headers} element={element} index={index} />
                    )
                )
            }
        </table>
    );
}

export default Table;