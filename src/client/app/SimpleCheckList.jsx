import React from 'react';
import SimpleListItem from './SimpleListItem.jsx';
import {List} from 'material-ui/List';

class SimpleCheckList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul className='list-group'>
                <SimpleListItem checked={true} />
                <SimpleListItem text='Suck it bitch!' />
                <SimpleListItem />
            </ul>
        );
    }
}

export default SimpleCheckList
