import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        //this.sHandler = this.sHandler.bind(this);
        console.log('[Person.js] ', props);
    }

    componentWillMount() {
        console.log('Person.js, component will mount');
    }

    componentDidMount() {
        console.log('Person.js, component did mount!');
    }

    render() {
        console.log('Person.js inside render()');
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>
                    I'm, {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    }
}
//  = (props) => {
//     // const rn = Math.random();
//     // if(rn > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }

// };

export default Person;
