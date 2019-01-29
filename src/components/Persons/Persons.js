import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={evt => this.props.changed(evt, person.id)}
                />
            })
        )
    }
}

export default Persons;


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