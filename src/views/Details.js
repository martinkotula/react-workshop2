import React, {Component} from 'react';
import {defineMessages, injectIntl} from 'react-intl';
import Link from '../components/Link';
import ShowFromProps from "../components/ShowFromProps"

const messages = defineMessages({
    showFromProps: {
        id: 'showFromProps.text',
        defaultMessage: 'Some text'
    }
})

class Details extends Component{
    

    render(){
        const {formatMessage} = this.props.intl;

        return (
            <div className="details">
                <ShowFromProps text={formatMessage(messages.showFromProps)} />
                <br />
                <Link path="/">Go to main</Link>
            </div>
        );
    }
}

export default injectIntl(Details);