// This is the container for all of the card elements.
import React from 'react';
import CardHeader from './CardHeader.jsx';
import {Card} from 'material-ui/Card';
import EditableTextArea from './EditableTextArea.jsx';
import SimpleCheckList from './SimpleCheckList.jsx';


// Is it best to do styles in line or in separate less files?
const styles = {
    card: {
        maxWidth: '600px',
    }
}

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        // Do you use relay to populate state variables?
    }

    render() {
        return (
            <div className='row'>
                <div className='col-lg-6 col-lg-offset-3'>
                    <Card style={styles.card}>
                        <CardHeader windowWidth={this.props.windowWidth} title={this.props.title}/>
                        <EditableTextArea />
                        <SimpleCheckList windowWidth={this.props.windowWidth} />
                    </Card>
                </div>
            </div>
        );
    }


}

CardContainer.defaultProps = {
    title: 'Experimental Design',
    windowWidth: 1000 
}

export default CardContainer


