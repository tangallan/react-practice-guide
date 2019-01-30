import React, { PureComponent } from 'react';
import Person from './Person/Person';


// PureComponent - checks ALL PROPS & STATE COMPARISON BY DEFAULT
// DOES NOT NEED TO IMPLEMENT shouldComponentUpdate
class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Update Persons.js] Inside componentDidUpdate');
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
                    position={index}
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