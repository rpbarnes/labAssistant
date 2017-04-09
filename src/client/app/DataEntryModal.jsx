import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextEditorDEM from './TextEditorDEM.jsx';

class DataEntryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            cardText: this.props.cardText,
            cardRespText: this.props.cardRespText,
            title: this.props.title
        };
        this.cardTextChanged = this.cardTextChanged.bind(this);
        this.cardRespTextChanged = this.cardRespTextChanged.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    cardTextChanged(text) {
        this.setState({cardText: text});
        console.log(this.state.cardText);
    }

    cardRespTextChanged(text) {
        this.setState({cardRespText: text});
        console.log(this.state.cardRespText);
    }

    handleClose() {
        this.props.closeModal(this);
    }

    render() {
        const actions = [
            <FlatButton label='Done' primary={true} onClick={this.handleClose} />,
        ];

        return (
            <div>
                <Dialog modal={false} actions={actions} open={this.props.open} autoScrollBodyContent={true} onRequestClose={this.handleClose}>
                    <h2>{this.state.title}</h2>
                    <TextEditorDEM textHint='Card Text' textValue={this.state.cardText} textSubmit={this.cardTextChanged} />
                    <TextEditorDEM textHint='Response Text' textValue={this.state.cardRespText} textSubmit={this.cardRespTextChanged} />
                </Dialog>
            </div>
        );
    }
                    
}


export default DataEntryModal;
