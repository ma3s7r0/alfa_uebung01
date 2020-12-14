import React from 'react';
import '../App.css';

function Table(props) {

    let headers = Object.keys(props.data[0])

    return (
        <>
        <table>
            <tr>
                {headers.map(header => <th> {header} </th>)}
            </tr>
            {
                props.data.map(
                    (element, index) => <tr className={(index & 1) && "odd"}> {headers.map(header => <td>{element[header]}</td>)} </tr>)
            }
        </table>
        </>
    );
}

export default Table;