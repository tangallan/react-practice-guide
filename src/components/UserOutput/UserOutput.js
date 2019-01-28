import React from 'react';
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Let's display this {props.username} first</p>
            <p>Then display this {props.username}</p>
        </div>
    )
}

export default userOutput;