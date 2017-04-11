import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: ''
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleOpen() {
        // User clicked on 'Add ...'
        this.setState({editing: true});
    }

    handleDone(event) {
        // This behaves properly on 'Enter' but not on the button click. It's like this doesn't fire the first time the button is rendered.
        // User has clicked 'Done'. Compile card document and send to SectionContainer
        event.preventDefault();
        if (this.state.text !== '') {
            var text = this.state.text;
            this.props.handleAddCard(text);
            this.setState({ text: ''});
        }
        // need to reset the text.
        this.handleClose();
    }

    handleClose() {
        // User has canceled entry. Hold on to the text they entered.
        this.setState({editing: false});
    }

    handleEdit(event) {
        this.setState({text: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log('pressed enter');
            event.preventDefault();
            this.handleDone(event);
        }
    }

    renderAddOrTextEdit() {
        if (this.state.editing) {
            // give a text field and button group with 'Done' and 'Cancel'
            return (
                <div className='well'>
                    <TextField hintText='Add new...' value={this.state.text} multiLine={true} rows={1} onKeyPress={this.handleKeyPress} onChange={this.handleEdit} onBlur={this.handleClose} />
                    <div>
                        <FlatButton label='Cancel' onTouchTap={this.handleClose} />
                        <FlatButton label='Done' onTouchTap={this.handleDone} />
                    </div>

                </div>
            );
        } else {
            // show the add button
            return (
                <FlatButton label='Add new...' onTouchTap={this.handleOpen} fullWidth={true}/>
            );
        }
    }

    render() {
        return(
            <div>{this.renderAddOrTextEdit()}</div>
        );
    }
}

export default AddCard

