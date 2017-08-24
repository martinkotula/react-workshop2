import React, {Component} from 'react';
import Link from '../components/Link';

class Main extends Component{

    render(){
        return (
            <div className="main">
                Main
                <Link path="/details">Go to details</Link>
            </div>
        );
    }
}

export default Main; 