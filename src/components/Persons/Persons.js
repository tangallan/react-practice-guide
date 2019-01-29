import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        //this.sHandler = this.sHandler.bind(this);
        console.log('[Persons.js] ', props);
    }

    componentWillMount() {
        console.log('Persons.js, component will mount');
    }

    componentDidMount() {
        console.log('Persons.js, component did mount!');
    }

    render() {
        console.log('Persons.js render()');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={evt => this.props.changed(evt, person.id)}
                />
            );
        });
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