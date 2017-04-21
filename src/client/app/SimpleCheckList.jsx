import React from 'react';
import SimpleListItem from './SimpleListItem.jsx';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

class SimpleCheckList extends React.Component {
    constructor(props) {
        super(props);
        // determine how many items are done.
        var completed = null;
        var total = this.props.items.length;
        this.props.items.map( function(item) {
            if (item.checked) {
                completed += 1;
            }
        });
        console.log(completed / total);
        // I dump these in a state variable because the parent shouldn't care about this data.
        this.state = {
            completedItems: completed,
            totalItems: total,
            progress: (completed / total) * 100
        }
    }

    onAddItem() {
        // The user wants to add a new item to the list.
        console.log('Adding Item');
    }

    createList(item) {
        // for some reason I cannot access the key prop but I can access the id prop?
        return(
            <SimpleListItem key={item.key} id={item.key} text={item.text} checked={item.checked} />
        );
    }

    render() {
        var listItems = this.props.items.map(this.createList);
        let buttonDisp = null 
        if (this.props.windowWidth < this.props.breakWidth) {
            buttonDisp = <FloatingActionButton className='pull-right' secondary={true} onTouchTap={this.onAddItem.bind(this)} >
                             <ContentAdd />
                         </FloatingActionButton>;
        } else {
            buttonDisp = <FlatButton label='Add new...' fullWidth={true} onClick={this.onAddItem.bind(this)} />;
        }
                    
        return(
            <div>
                <LinearProgress mode='determinate' value={this.state.progress} />
                <ul className='list-group'>
                    {listItems}
                </ul>;
                {buttonDisp}         
            </div>
        );
    }
}

export default SimpleCheckList

SimpleCheckList.defaultProps = {
    windowWidth: 600,
    breakWidth: 500,
    items: [
        {key: 12345, text: 'suck nuts captain', checked: true},        // moved editing to state variable within the SimpleListItem.
        {key: 12346, text: 'bring it on jackass', checked: false},
        {key: 12347, text: 'fairy tails are cool!', checked: false}
    ],
}
