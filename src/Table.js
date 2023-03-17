import React, { Component } from 'react'

const Table = (props) => {
    const { characterData, removeCharacter } = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={ characterData } removeCharacter = { removeCharacter }/>
        </table>
    )
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>    
        </thead>
    )
}

const TableBody = props => { 
    
    function turnObjectIntoRow(object, index) {
        return (
            <tr key={index}>
                <td>{object.name}</td>
                <td>{object.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>delete</button></td>
            </tr>
        );
    } 

    const rows = props.characterData.map(turnObjectIntoRow);

    return <tbody>{rows}</tbody>;
}

export default Table