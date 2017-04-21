import React from 'react';
import {ListItem} from 'material-ui/List';
import CheckBox from 'material-ui/CheckBox';
import {grey400} from 'material-ui/styles/colors'; // this is how you do the colors...
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class SimpleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickListItem() {
        // The item was clicked on now let the user edit the text.
        console.log('Text Clicked');
    }

    onCheckBox() {
        // The box was checked 
        console.log('Box Checked');
    }

    onClickToEdit(event) {
        // The user clicked the edit button
        console.log('Edit Button Clicked');
        event.preventDefault();
    }

    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="edit"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} onClick={this.onClickToEdit.bind(this)} />
            </IconButton>
        );

        let text = this.props.checked ? <strike>{this.props.text}</strike> : this.props.text;
        return (
            <ListItem 
                leftCheckbox={<CheckBox checked={this.props.checked} onClick={this.onCheckBox.bind(this)} />}
                rightIconButton={iconButtonElement}
                primaryText={this.props.text}
                
            />
        );
    }
}

SimpleListItem.defaultProps = {
    text: 'This is an item',
    checked: false
}

export default SimpleListItem
