import React, { Component } from 'react';
import styles from './Person.module.css';
// import WithClass from '../../../hoc/WithClass';
import withClassV2 from '../../../hoc/WithClassV2';

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
        // console.log('Person.js inside render()');
        console.log('Person.js inside render()');
        return (
            <>
                <p onClick={this.props.click}>
                    I'm, {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </>
        );
        // return (
        //     <WithClass classes={styles.Person}>
        //         <p onClick={this.props.click}>
        //             I'm, {this.props.name} and I am {this.props.age} years old!
        //         </p>
        //         <p>{this.props.children}</p>
        //         <input
        //             type='text'
        //             onChange={this.props.changed}
        //             value={this.props.name}
        //         />
        //     </WithClass>
        // );
        // we could return an array of elements
        // but each element needs a key
        // for example
        // return [
        //     <p key="1" onClick={this.props.click}>
        //         I'm, {this.props.name} and I am {this.props.age} years old!
        //         </p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3"
        //         type='text'
        //         onChange={this.props.changed}
        //         value={this.props.name}
        //     />
        // ]
    }
}
//  = (props) => {
//     // const rn = Math.random();
//     // if(rn > 0.7) {
//     //     throw new Error('Something went wrong');
//     // }

// };

export default withClassV2(Person, styles.Person);
