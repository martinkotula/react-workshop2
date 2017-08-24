import React, {Component} from 'react';
import Route from './Route';
import Main from '../views/Main';
import Details from '../views/Details';

class App extends Component{

    render(){
        return (
            <div className="app">
                <Route path="/" component={Main}/>
                <Route path="/details" component={Details}/>
            </div>
        );
    }
}

export default App; 