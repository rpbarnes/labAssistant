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
            primaryText: '',
            secondaryText: '',
            modalOpen: false,
            cardEditing: {}, // this is the card currently being edited.
            cards: [],
            numCards: 0
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.createCard = this.createCard.bind(this);
        this.upDateCards = this.upDateCards.bind(this);
    }

    handleOpen(key) {
        // Opens DataEntryModal 
        var card = this.state.cards.filter( function(card) { // this returns a list...
            if (card.id === key) {
                return card;
            } 
        });
        card = card[0];
        this.setState({
            primaryText: card.text, // why doesn't this update before the next rerender
            secondaryText: card.response,
            modalOpen: true,
            cardEditing: card
        });
    }

    handleClose(child) {
        // Closes DataEntryModal 
        var primaryText = child.state.cardText;
        var secondaryText = child.state.cardRespText;
        var card = this.state.cardEditing;
        // pull the card that was edited out of the list.
        card.text = primaryText;
        card.response = secondaryText;
        this.setState({
            modalOpen: false,
        });
        this.upDateCards(card);
    }

    upDateCards(card) {
        // If the card already exists drop it from array.
        var newCards = this.state.cards.filter( function(cardInList) {
            if (cardInList.id !== card.id) {
                return cardInList;
            }
        });
        newCards.push(card); // do I need to write card to state?
        // Sort the cards based on position
        newCards.sort( function(a,b) {
            if (a.position < b.position) {
                return -1;
            } else {
                return 1;
            }
        });
        this.setState({ cards: newCards });
    }

    createCard(text) {
        var card = {
            text: text,
            response: '',
            id: Date.now(),
            position: this.state.numCards, // index of the position in the section.
            checked: false
        };
        this.upDateCards(card);
        this.setState({numCards: this.state.numCards + 1});
    }

    render() {
        return (
            <div className='row'>
                <div className='col-lg-8 col-md-offset-2 well light-primary-color text-primary-color'> 
                    <div onClick={this.handleOpen}> 
                        <h2>{this.state.title}</h2>
                    </div>
                    <CardDisplay cardsToDisplay={this.state.cards} handleClick={this.handleOpen} />
                    <DataEntryModal cardText={this.state.primaryText} cardRespText={this.state.secondaryText} open={this.state.modalOpen} title={this.state.title} closeModal={this.handleClose} />
                    <AddCard handleAddCard={(card) => this.createCard(card)}/>
                </div>
            </div>
        );
    }
}

export default SectionContainer
