import React from 'react';
import CardHeader from './CardHeader.jsx';
import {Card} from 'material-ui/Card';

// This is the container for all of the card elements.

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        // Do you use relay to populate state variables?
        this.state = {
            title: 'Hypothesis'
        }
    }

    render() {
        return (
            <Card>
                <CardHeader windowWidth={this.props.windowWidth} title={this.props.title}/>
            </Card>
        );
    }


}

CardContainer.defaultProps = {
    title: 'Experimental Design',
    windowWidth: 1000 
}

export default CardContainer


