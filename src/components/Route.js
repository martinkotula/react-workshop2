import React, {Component} from 'react';

class Route extends Component{

    componentDidMount(){
        window.addEventListener('urlChanged', this.handleUrlChange);
        window.addEventListener('popstate', this.handleUrlChange);
    }

    componentWillUnmount(){
        window.removeEventListener('urlChanged', this.handleUrlChange);
        window.removeEventListener('popstate', this.handleUrlChange)
    }

    handleUrlChange = () => {
        this.forceUpdate();
    }

    render(){
        const {component, path} = this.props;

        if(path === window.location.pathname){
            return React.createElement(component)
        }

        return false;
    }
}

export default Route;