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
            cards: []
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.createCard = this.createCard.bind(this);
    }

    handleOpen(key) {
        // Opens DataEntryModal 
        // figure out which card was clicked
        var card = this.state.cards.map( function(card) { // this returns a list...
            if (card.id === key) {
                return card;
            } 
        });
        card = card[0];
        console.log(card.text)
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
        var cards = this.state.cards.filter( function(cardInList) {
            if (cardInList.id !== card.id) {
                return cardInList;
            }
        });
        card.text = primaryText;
        card.response = secondaryText;
        cards.push(card); // do I need to write card to state?
        console.log(card)
        this.setState({
            modalOpen: false,
            cards: cards
        });
    }

    createCard(text) {
        var cards = this.state.cards;
        cards.push({
            text: text,
            response: '',
            id: Date.now(),
            position: 0, // index of the position in the section.
            checked: false
        });
        this.setState({cards: cards});
    }

    render() {
        // DataEntryModal doesn't rerendered when I change this.state.primaryText. Lets force it to behave properly... I'm not really sure this is a good way of doing this though...
        let dataModal = null;
        if (this.state.modalOpen) {
            dataModal = <DataEntryModal cardText={this.state.primaryText} cardRespText={this.state.secondaryText} open={this.state.modalOpen} title={this.state.title} closeModal={this.handleClose} />;
        } 

        return (
            <div className='row'>
                <div className='col-lg-8 col-md-offset-2 well light-primary-color text-primary-color'> 
                    <div onClick={this.handleOpen}> 
                        <h2>{this.state.title}</h2>
                    </div>
                    {dataModal}
                    <CardDisplay cardsToDisplay={this.state.cards} handleClick={this.handleOpen} />
                    <AddCard handleAddCard={(card) => this.createCard(card)}/>
                </div>
            </div>
        );
    }
}

export default SectionContainer
