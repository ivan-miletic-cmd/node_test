import React from 'react';

const Comments = props => {
    return (
        <div>
            <a href='/'><b>{props.name}</b></a>
            <p>{props.comment}</p>

        </div>
    );
};

export default Comments;