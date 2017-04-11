import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DataEntryModal from './DataEntryModal.jsx';
import CardDisplay from './CardDisplay.jsx';
import AddCard from './AddCard.jsx';

class SectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'Section (Change)',
            primaryText: 'This is new.',
            secondaryText: '',
            modalOpen: false,
            cards: []
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.createCard = this.createCard.bind(this);
    }

    handleOpen(key) {
        // Opens DataEntryModal 
        // This needs to figure out which card was clicked
        this.setState({modalOpen: true});
    }

    handleClose(child) {
        // Closes DataEntryModal 
        var primaryText = child.state.cardText;
        var secondaryText = child.state.cardRespText;
        console.log(primaryText);
        this.setState({
            modalOpen: false,
            primaryText: primaryText,
            secondaryText: secondaryText 
        }, function () {
            this.render(); // this is probably stupid...
        }
        );
    }

    createCard(text) {
        console.log('I was called');
        var cards = this.state.cards;
        cards.push({
            text: text,
            response: '',
            id: Date.now(),
            checked: false
        });
        this.setState({cards: cards});
        console.log(cards);
    }

    render() {
        //<RaisedButton label='Open Modal' onTouchTap={this.handleOpen} />
        return (
            <div className='row'>
                <div className='col-lg-8 col-md-offset-2 well light-primary-color text-primary-color'> 
                    <div onClick={this.handleOpen}> 
                        <h2>{this.state.title}</h2>
                    </div>
                    <DataEntryModal cardText={this.state.primaryText} cardRespText={this.state.secondaryText} open={this.state.modalOpen} title={this.state.title} closeModal={this.handleClose} />
                    <CardDisplay cardsToDisplay={this.state.cards} handleClick={this.handleOpen} />
                    <AddCard handleAddCard={(card) => this.createCard(card)}/>
                </div>
            </div>
        );
    }
}

export default SectionContainer
