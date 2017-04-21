import React from 'react';
import {ListItem} from 'material-ui/List';
import CheckBox from 'material-ui/CheckBox';
import {grey400} from 'material-ui/styles/colors'; // this is how you do the colors...
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FlatButton from 'material-ui/FlatButton';

// Called from SimpleCheckList
// textarea needs to be single line and button looks like shit!
// list elements have too much spacing between them!
class SimpleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onCheckBox(id, event) {
        // The box was checked 
        console.log('Box Checked');
        console.log(id);
    }

    onClickToEdit(id, event) {
        // The user clicked the edit button
        console.log('Edit Button Clicked');
        console.log(id);
        event.preventDefault();
    }

    onKey(id, event) {
        // on Enter or Escape should exit editing mode
        console.log(id);
    }

    onDone(id, event) {
        // user is done editing. Exit editing mode
        console.log('done');
        console.log(id);
    }

    onTextEdit(id, event) {
        // user is editing text in textArea. Should update text state variable for item id=id
        console.log(id);
    }

    render() {
        if ( !this.props.editing ) {
            const iconButtonElement = (
                <IconButton
                    touch={true}
                    tooltip="edit"
                    tooltipPosition="bottom-left"
                >
                    <ModeEdit color={grey400} onClick={this.onClickToEdit.bind(this,this.props.id)} />
                </IconButton>
            );

            let text = this.props.checked ? <strike>{this.props.text}</strike> : this.props.text;
            return (
                <ListItem 
                    key={this.props.id}
                    leftCheckbox={<CheckBox checked={this.props.checked} onClick={this.onCheckBox.bind(this,this.props.id)} />}
                    rightIconButton={iconButtonElement}
                    primaryText={text}
                    
                />
            );
        } else {
            return (
                <div className='input-group' onKeyDown={this.onKey.bind(this, this.props.id)}> 
                    <textArea type='text' rows='2' value={this.props.text} onChange={this.onTextEdit.bind(this, this.props.id)} className='form-control custom-control' id={this.props.id} />
                    <span className='input-group-addon'>
                        <FlatButton label='Done' primary={true} onClick={this.onDone.bind(this, this.props.id)}/>
                    </span>
                </div>
            );
        }

    }
}

SimpleListItem.defaultProps = {
    id: 123456,
    text: 'This is an item',
    checked: false,
    editing: false
}

export default SimpleListItem
