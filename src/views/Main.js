import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import Link from '../components/Link';


class Main extends Component{

    render(){
        return (
            <div className="main">
                <FormattedMessage
                    id="Main.first-message"
                    description="Welcome message used on main screen"
                    defaultMessage={"Welcome from {name}!"}
                    values={{name:"React"}}
                />
                <Link path="/details">Go to details</Link>
            </div>
        );
    }
}

export default Main; 