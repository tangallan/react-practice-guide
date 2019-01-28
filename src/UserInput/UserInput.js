import React from 'react';

const userInput = (props) => {
    const style = {
        color: 'blue',
        fontWeight: 'bold'
    };
    return (
        <input type="text" style={style}
            value={props.username}
            onChange={props.userInputChanged} />
    )
};

export default userInput;