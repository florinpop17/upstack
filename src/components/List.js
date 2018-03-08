import React from 'react';

const List = (props) => (
    <ul>
        {props.data && props.data.map(person => (
            <li key={person.id}><strong>{person.first_name}</strong> {person.email}</li>
        ))}
    </ul>
);

export default List;