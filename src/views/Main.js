import React, {Component} from 'react';
import {FormattedMessage, FormattedDate, FormattedRelative, FormattedTime, FormattedPlural, FormattedNumber  } from 'react-intl';

import Link from '../components/Link';


class Main extends Component{
    constructor(){
        super();

        this.state = {
            amount: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState((prevState) => ({amount: prevState.amount + 0.5}))
        }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <div className="main">
                <FormattedMessage
                    id="Main.first-message"
                    description="Welcome message used on main screen"
                    defaultMessage={"Welcome from {name}!"}
                    values={{name:"React"}}
                />
                
                <br />

                <FormattedDate value={Date.now()} />

                <br />

                <FormattedRelative value={'2017-08-21 20:00'} />

                <br />
                
                <FormattedNumber value={'22.40'} />

                <br />
                
                <FormattedTime value={'2017-08-21 20:00'} />

                <br />
                {this.state.amount}{' '}
                <FormattedPlural 
                    value={this.state.amount}
                    one="pieróg"
                    few="pierogi"
                    many="pierogów"
                    other="pieroga"
                />

                <br />

                <br />
                {this.state.amount}{' '}
                <FormattedPlural 
                    value={this.state.amount}
                    one={<FormattedMessage id="one.pierog" defaultMessage="pieróg" />}
                    few={<FormattedMessage id="few.pierog" defaultMessage="pierogi" />}
                    many={<FormattedMessage id="many.pierog" defaultMessage="pierogów" />}
                    other={<FormattedMessage id="other.pierog" defaultMessage="pieroga" />}
                />

                <br />
                <FormattedMessage 
                    id="fn.pierogi"
                    description="pluralization for pierogi"
                    defaultMessage={"{amount, plural, =0 {brak pierogów translation} one {# pieróg} few {# pierogi} many {# pierogów} other {# pieroga translation}}"}
                    values={{amount:this.state.amount}}
                />
<br />
                <Link path="/details">Go to details</Link>
            </div>
        );
    }
}

export default Main; 