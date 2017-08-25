import React from 'react';

const ShowFromProps = props => {
    return (
        <div className="show-from-props">
            Translated: {props.text}
        </div>
    );
}

export default ShowFromProps;