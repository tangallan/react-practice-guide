import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={evt => props.changed(evt, person.id)}
        />
    })
);

export default persons;


// // high ordered component
// // key always has to be on the OUTER ELEMENT
// <ErrorBoundary key={person.id}>
//     <Person
//         click={() => this.deletePersonHandler(index)}
//         name={person.name}
//         age={person.age}
//         changed={evt =>
//             this.nameChangedHandler(evt, person.id)
//         }
//     />
// </ErrorBoundary>