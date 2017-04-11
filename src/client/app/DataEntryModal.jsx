import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextEditorDEM from './TextEditorDEM.jsx';

class DataEntryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            cardRespText: this.props.cardRespText, 
            cardText: this.props.cardText
        };
        this.cardTextChanged = this.cardTextChanged.bind(this);
        this.cardRespTextChanged = this.cardRespTextChanged.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
        //console.log(this.props.cardText);
    }

    componentWillUpdate() {
        // Constructor doesn't get called on rerender so update the text states so we can keep track of things.

    }

    cardTextChanged(text) {
        // Actually you should tell SectionContainer about it here and let the SectionContainer setState.
        this.setState({cardText: text});
    }

    cardRespTextChanged(text) {
        this.setState({cardRespText: text});
        //console.log(this.state.cardRespText);
    }
    
    // I'm doing something really stupid but I'm not sure where I'm being stupid... This is a workaround. I think it's probably better to let SectionContainer handle this.
    handleClose() {
        if (this.state.cardText === '') {
            var cardText = this.props.cardText;
        } else {
            var cardText = '';
        }
        if (this.state.cardRespText === '') {
            var respText = this.props.cardRespText;
        }else {
            var respText = '';
        }
        this.setState({
            cardText: cardText,
            cardRespText: respText
        }, function() {
            this.props.closeModal(this);
        }
        );
    }

    render() {
        const actions = [
            <FlatButton label='Done' primary={true} onClick={this.handleClose} />,
        ];

        return ( 
            <div>
                <Dialog modal={false} actions={actions} open={this.props.open} autoScrollBodyContent={true} onRequestClose={this.handleClose}>

                    <h2>{this.props.title}</h2>

                    <TextEditorDEM textHint='Card Text' textValue={this.props.cardText} textSubmit={this.cardTextChanged} />

                    <TextEditorDEM textHint='Response Text' textValue={this.props.cardRespText} textSubmit={this.cardRespTextChanged} />

                </Dialog>
            </div>
        );
    }
                    
}


export default DataEntryModal;
