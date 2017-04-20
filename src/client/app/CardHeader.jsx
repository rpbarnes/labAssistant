import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// this conditionally renders the menu and close buttons. If the screen size is less that breakWidth it shows menu and close buttons if not it does not show these buttons.
class CardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    onNewExperiment(){
        // new exp button was clicked
        console.log('new exp clicked');
    }

    onComment() {
        // the comment button was clicked
        console.log('comment clicked');
    }

    onDelete() {
        // the delete button was clicked
        console.log('delete exp clicked');
    }

    onClose() {
        // the close button was clicked
        console.log('close clicked');
    }

    render() {
        if (this.props.windowWidth < this.props.breakWidth) {
            var Menu = <IconMenu 
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} 
                            targetOrigin={{horizontal: 'right', vertical: 'top'}} 
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText='New Experiment' onClick={this.onNewExperiment.bind(this)}/>
                            <MenuItem primaryText='Comment' onClick={this.onComment.bind(this)}/>
                            <MenuItem primaryText='Delete Experiment' onClick={this.onComment.bind(this)}/>
                        </IconMenu>
                        
            return(
                <div>
                    <AppBar
                        title={this.props.title}
                        iconElementLeft={<IconButton onClick={this.onClose.bind(this)}><NavigationClose /></IconButton>}
                        iconElementRight={Menu}
                    />
                </div>
            );
        } else {
            return(
                <div>
                    <AppBar
                        title={this.props.title}
                        showMenuIconButton={false}
                    />
                </div>
            );
        }
    }
}

CardHeader.defaultProps = {
    title: 'Hypothesis',
    windowWidth: 1000,
    breakWidth: 500
};

export default CardHeader

