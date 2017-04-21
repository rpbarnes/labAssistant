import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// You need to define less or css to make the paragraph element look clickable.
// Define on Key down
class EditableTextArea extends React.Component{
    constructor(props) {
        super(props);
    }

    onDone() {
        // Done button clicked.
        console.log('Done Clicked');
    }

    onEdit() {
        console.log('Paragraph Clicked');
    }

    onTextEdit() {
        console.log('text is being edited');
    }

    onKey(event) {
        // this should check for Escape or Meta-Enter to add the text. Escape should not delete the text in this area.
        console.log('key pressed');
    }

    render() {
        if (this.props.editing) {
            return (
                <div className='form-group' onKeyDown={this.onKey.bind(this)}>
                    <textarea value={this.props.text} onChange={this.onTextEdit.bind(this)} className='form-control' rows='5' id='mainText'></textarea>
                    <FlatButton label='Done' primary={true} onClick={this.onDone.bind(this)} />
                </div>
            );
        } else {
            return (
                <div onClick={this.onEdit.bind(this)}>
                    <p>{this.props.text}</p>
                </div>
            );
        }
    }
}

EditableTextArea.defaultProps = {
    editing: true, // this is changed by parent who is listening to clicks.
    text: 'Write text here'
}

export default EditableTextArea
