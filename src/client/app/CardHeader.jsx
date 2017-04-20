import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// this needs to render the menu and close buttons conditionally.
class CardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Menu = <IconMenu 
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} 
                        targetOrigin={{horizontal: 'right', vertical: 'top'}} 
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText='New Experiment' />
                        <MenuItem primaryText='Comment' />
                        <MenuItem primaryText='Delete Experiment' />
                    </IconMenu>
                    
        return(
            <div>
                <AppBar
                    title={this.props.title}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={Menu}
                />
            </div>
        );
    }
}

CardHeader.defaultProps = {
    title: 'Hypothesis'
};

export default CardHeader

