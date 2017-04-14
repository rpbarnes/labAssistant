import React from 'react';
import TextField from 'material-ui/TextField'; // probably should be moved to it's own component

// turn this into a function

function TitleDisplay(props) {
    if (props.editing) {
        return (
            <div className='primary-text-color' onKeyDown={(e) => props.handleKeyPress(e)}>
                <TextField autoFocus id='Title' value={props.title} multiLine={true} rows={1} onChange={(e) => props.handleTextEdit(e)} onBlur={(e) => props.handleSubmit(e)}/>
            </div>
        );
    } else {
        return (
            <div onClick={(e) => props.handleClick(e)}>
                <h2>{props.title}</h2>
            </div>
        );
    }
}

export default TitleDisplay
