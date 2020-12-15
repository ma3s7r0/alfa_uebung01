import React from 'react';

function TableRow(props) {
    return (
        <tr className = {
            //Set on every 2nd row the property odd
            (props.index & 1) && "odd"
        }>{
            //Create a cell for every property of the underlying object
            props.headers.map(header => <td> {props.element[header]} </td>)
            }
        </tr>      
    );
}

export default TableRow;