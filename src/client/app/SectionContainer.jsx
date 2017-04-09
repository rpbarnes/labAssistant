import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DataEntryModal from './DataEntryModal.jsx';

class SectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'Section (Change)',
            primaryText: '',
            secondaryText: '',
            modalOpen: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        // Opens DataEntryModal 
        this.setState({modalOpen: true});
    }

    handleClose(child) {
        // Closes DataEntryModal 
        this.setState({
            modalOpen: false,
            primaryText: child.state.cardText,
            secondaryText: child.state.cardRespText
        });
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-4 col-md-offset-4'> 
                    <a href='#'>
                        <h2>{this.state.title}</h2>
                    </a>
                    <RaisedButton label='Open Modal' onTouchTap={this.handleOpen} />
                    <DataEntryModal cardText={this.state.primaryText} cardRespText={this.state.secondaryText} open={this.state.modalOpen} title={this.state.title} closeModal={this.handleClose} />
                </div>
            </div>
        );
    }
}

export default SectionContainer
