import React from 'react';

const entity = (props) => {
    return (
        <div>
            <p onClick={props.changed}>Named entity having frequency {props.frequency} and NER type {props.nerType} fetched out of GraphDB.</p>
            <p>{props.children}</p>
            <input type="text" value={props.frequency} onChange={props.clicked} />
        </div>
    )
};

export default entity;