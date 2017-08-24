import React from 'react'

const Link = props => {
    const {path, children} = props;
    
    const handleClick = event => {
        event.preventDefault();

        //eslint-disable-next-line
        history.pushState({}, "", path);

        const urlChangedEvent = new Event('urlChanged');
        window.dispatchEvent(urlChangedEvent);
    }

    return (
        <a href={path} onClick={handleClick}>{children}</a>
    );
};

export default Link;