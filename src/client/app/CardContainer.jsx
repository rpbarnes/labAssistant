import React from 'react';
import CardHeader from './CardHeader.jsx';
import {Card} from 'material-ui/Card';
import EditableTextArea from './EditableTextArea.jsx';


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
            <div>
                <CardHeader windowWidth={this.props.windowWidth} title={this.props.title}/>
                <EditableTextArea />
            </div>
        );
    }


}

CardContainer.defaultProps = {
    title: 'Experimental Design',
    windowWidth: 1000 
}

export default CardContainer


