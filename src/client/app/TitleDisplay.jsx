import React from 'react';
import TextField from 'material-ui/TextField'; // probably should be moved to it's own component

class TitleDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '', // keep track of text when it's changing
            editing: false
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTextEdit = this.handleTextEdit.bind(this);
    }

    handleTextEdit(event) {
        this.setState(text: event.target.value);
    }

    handleClick() {
        this.setState({editing: true});
    }

    handleSubmit(event) {
        this.props.setTitle(this.state.text);
        this.setState({
            editing: false,
            text: ''
        })
    }

    handleKeyPress(event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            this.handleSubmit(event);
        } else {
            event.preventDefault();
            this.handleSubmit(event);
        }
    }

    render() {
        // is this the proper way of doing this? Props aren't mutable and for some reason if I pass the event back to the parent the text doesn't change...
        var title = this.props.title;
        if (this.state.editing) {
            return (
                <div className='primary-text-color' onKeyDown={this.handleKeyPress}>
                    <TextField id='Title' value={title} multiLine={true} rows={1} onChange={this.handleTextEdit} onBlur={this.handleSubmit}/>
                </div>
            );
        } else {
            return (
                <div onClick={this.handleClick}>
                    <h2>{this.props.title}</h2>
                </div>
            );
        }
    }
}

export default TitleDisplay




