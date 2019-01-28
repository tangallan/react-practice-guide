import React from 'react';


const charComponent = (props) => {
    const styles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer'
    };
    return (
        <div style={styles} onClick={props.deleteHandler}>{props.thechar}</div>
    );
};

export default charComponent;