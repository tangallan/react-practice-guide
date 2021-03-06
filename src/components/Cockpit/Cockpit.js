import React from 'react';
import classes  from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>;
    // or we can do this (which is Fragment a built-in "Aux" by react 16.2+)
    // return <>
    //     <h1>{props.appTitle}</h1>
    //     <p className={assignedClasses.join(' ')}>This is really working!</p>
    //     <button className={btnClass} onClick={props.clicked}>
    //         Toggle Persons
    //         </button>
    // </>; 
};

// React.memo acts like PureComponent for functional components
// shallow level check
export default React.memo(cockpit);
