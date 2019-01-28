import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import CharComponent from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            { id: 'asdfas', name: 'Max', age: 28 },
            { id: 'dbadc', name: 'Manu', age: 29 },
            { id: 'hyjjh', name: 'Stephanie', age: 26 }
        ],
        username: 'Username1',
        showPersons: false,
        randomText: ''
    };
    
    // constructor() {
    //   // super();
    //   //this.sHandler = this.sHandler.bind(this);
    // }

    sHandler(evt) {
        console.log(this); // should be undefined....UNLESS U BIND
    }

    nameChangedHandler = (evt, personid) => {
        const personIndex = this.state.persons.findIndex(
            (f, index) => f.id === personid
        );
        const person = { ...this.state.persons[personIndex] }; // THIS SPREAD will create a new object and not be a pointer
        // const person = Object.assign({}, this.state.persons[personIndex]); // another way
        person.name = evt.target.value;

        // copy array and replace object
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    userInputChangedHandler = evt => {
        this.setState({
            username: evt.target.value
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    deletePersonHandler = personIndex => {
        // UPDATE THE STATE IN AN IMMUTABLE OPTIONS
        // const persons = this.state.persons.slice(); // SLICe copies the array, since it is a reference type
        const persons = [...this.state.persons]; // spreads out the persons (creates a new array)
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    randomTextHandler = evt => {
        this.setState({ randomText: evt.target.value });
    };

    charHandler = index => {
        const textArr = this.state.randomText.split('');
        textArr.splice(index, 1);
        const newText = textArr.join('');
        this.setState({
            randomText: newText
        });
    };

    render() {
        let person = null;
        let btnClass = '';

        if (this.state.showPersons) {
            person = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            // high ordered component
                            // key always has to be on the OUTER ELEMENT
                            <ErrorBoundary key={person.id}>
                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    changed={evt =>
                                        this.nameChangedHandler(evt, person.id)
                                    }
                                />
                            </ErrorBoundary>
                        );
                    })}
                </div>
            );

            btnClass = styles.Red;
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(styles.bold);
        }

        const charComponent = this.state.randomText.split('').map((s, i) => {
            return (
                <CharComponent
                    thechar={s}
                    index={i}
                    deleteHandler={this.charHandler.bind(this, i)}
                    key={i}
                />
            );
        });

        return (<div className={styles.App}>
                <h1>This is my practice react app</h1>
                <p className={classes.join(' ')}>
                    This is really working!
                </p>
                <button className={btnClass}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {person}
                <p>{this.state.showPersons}</p>
                <UserOutput username={this.state.username} />
                <UserInput username={this.state.username} userInputChanged={this.userInputChangedHandler} />
                <br />
                <input type='text' id='randomText' onChange={this.randomTextHandler} value={this.state.randomText} />
                <p>{this.state.randomText}</p>
                <Validation textlength={this.state.randomText.length} />
                {charComponent}
        </div>);
    }
}

// high ordered component
// injecting some extra functionalities
export default App;
