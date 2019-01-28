import React from 'react';

const validation = (props) => {
    // text length
    let msg = "Text is long enough";

    if(props.textlength <= 5) {
        msg = "Text is too short";
    }

    return (
        <div>
            <p>{msg}</p>
        </div>
    )
};

export default validation;