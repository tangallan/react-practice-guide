import React, { PureComponent } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import CharComponent from '../components/Char/Char';
import Cockpit from '../components/Cockpit/Cockpit';

// import WithClass from '../hoc/WithClass';
import withClassV2 from '../hoc/WithClassV2';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
    // constructor() ---- Create
    // componentWillMount() ---- Create
    // componentWillReceiveProps() ---- Update
    // shouldComponentUpdate() ---- Update (return true or false to indicate we need to update)
    // componentWillUpdate() ---- Update
    // componentDidUpdate() ---- Update
    // componentDidCatch()
    // componentDidMount() ---- Create
    // componentWillUnmount()
    // render() ---- Create

    constructor(props) {
        super(props);
        //this.sHandler = this.sHandler.bind(this);
        console.log('[App.js] ', props);
        this.state = {
            persons: [
                { id: 'asdfas', name: 'Max', age: 28 },
                { id: 'dbadc', name: 'Manu', age: 29 },
                { id: 'hyjjh', name: 'Stephanie', age: 26 }
            ],
            username: 'Username1',
            showPersons: false,
            randomText: '',
            toggleClicked: 0,
            authenticated: false
        };
    }

    componentWillMount() {
        console.log('App.js, component will mount');
    }

    componentDidMount() {
        console.log('App.js, component did mount!');
    }

    componentWillReceiveProps(nextProps) {
        console.log(
            '[Update App.js] Inside componentWillReceiveProps',
            nextProps
        );
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(
    //         '[Update App.js] Inside shouldComponentUpdate',
    //         nextProps,
    //         nextState
    //     );
    //     // return true;
    //     return (
    //         nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons
    //     );
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(
            '[Update App.js] Inside componentWillUpdate',
            nextProps,
            nextState
        );
    }

    componentDidUpdate() {
        console.log('[Update App.js] Inside componentDidUpdate');
    }

    // state = {
    //     persons: [
    //         { id: 'asdfas', name: 'Max', age: 28 },
    //         { id: 'dbadc', name: 'Manu', age: 29 },
    //         { id: 'hyjjh', name: 'Stephanie', age: 26 }
    //     ],
    //     username: 'Username1',
    //     showPersons: false,
    //     randomText: ''
    // };

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

        // DO NOT EVER DO THIS, BAD PRACTICE!
        // SET STATE IS ASYNC, WHICH MEANS WE CAN RELY ON THIS.STATE AS BEING THE ACTUAL STATE
        // this.setState({ 
        //     showPersons: !doesShow,
        //     toggleClicked: this.state.toggleClicked + 1
        // });

        // THIS WAY WE CAN ENSURE WHAT WAS PREVIOUS 
        // THIS IS HOW WE SHOULD MUTATE STATE
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
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

    loginHandler = () => {
        this.setState({ authenticated: true });
    }

    render() {
        console.log('App.js, inside render()');
        let person = null;

        if (this.state.showPersons) {
            person = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
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

        return (
            <>
                <button
                    onClick={() => {
                        this.setState({ showPersons: true });
                    }}>
                    Show Persons
                </button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                {person}
                </AuthContext.Provider>
                <UserOutput username={this.state.username} />
                <UserInput
                    username={this.state.username}
                    userInputChanged={this.userInputChangedHandler}
                />
                <br />
                <input
                    type='text'
                    id='randomText'
                    onChange={this.randomTextHandler}
                    value={this.state.randomText}
                />
                <p>{this.state.randomText}</p>
                <Validation textlength={this.state.randomText.length} />
                {charComponent}
            </>
        );
    }
}

// high ordered component
// injecting some extra functionalities
// H.O.C - method version (withClassV2)
export default withClassV2(App, styles.App);
