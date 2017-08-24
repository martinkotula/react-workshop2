import React, {Component} from 'react';
import Link from '../components/Link';

class Details extends Component{

    render(){
        return (
            <div className="details">
                Details
                <Link path="/">Go to main</Link>
            </div>
        );
    }
}

export default Details; 