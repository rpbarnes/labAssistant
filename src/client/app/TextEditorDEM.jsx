import React from 'react';
import TextField from 'material-ui/TextField';

class TextEditorDEM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.textValue
        };
        this.handleTextChanged = this.handleTextChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.textSubmit(this.state.text);
    }
        

    handleTextChanged(event) {
        this.setState({'text':event.target.value});
    }

    render() {
        // hit esc to save text and get out of the text field.
        return (
            <div>
                <TextField hintText={this.props.textHint} value={this.state.text} multiLine={true} rows={1} onChange={this.handleTextChanged} onBlur={this.handleSubmit}/>
            </div>
        );
    }
}

export default TextEditorDEM






