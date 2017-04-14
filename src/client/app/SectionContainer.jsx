import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DataEntryModal from './DataEntryModal.jsx';
import CardDisplay from './CardDisplay.jsx';
import AddCard from './AddCard.jsx';
import TitleDisplay from './TitleDisplay.jsx';

class SectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'Section (Change)',
            editingTitle: false,
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
        this.handleEditTitle = this.handleEditTitle.bind(this);
        // functions for the title editing
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTextEdit = this.handleTextEdit.bind(this);
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
    
    // functions for editing the title
    handleEditTitle(event) {
        this.setState({title: event.target.value});
    }

    handleKeyPress(event) {
        console.log(event.key);
        if (event.key == 'Enter') {
            event.preventDefault();
            this.handleSubmit(event);
        } else if (event.key == 'Escape') {
            event.preventDefault();
            this.handleSubmit(event);
        }
    }

    handleTextEdit(event) {
        this.setState({title: event.target.value});
    }

    handleClick() {
        this.setState({editingTitle: true});
    }

    handleSubmit(event) {
        this.setState({
            editingTitle: false,
            title: event.target.value
        })
    }

    render() {

        return (
            <div className='row'>
                <div className='col-lg-8 col-md-offset-2 well light-primary-color text-primary-color'> 
                    <TitleDisplay editing={this.state.editingTitle} handleKeyPress={this.handleKeyPress} title={this.state.title} handleTextEdit={this.handleTextEdit} handleSubmit={this.handleSubmit} handleClick={this.handleClick}/>
                    <CardDisplay cardsToDisplay={this.state.cards} handleClick={this.handleOpen} />
                    <DataEntryModal cardText={this.state.primaryText} cardRespText={this.state.secondaryText} open={this.state.modalOpen} title={this.state.title} closeModal={this.handleClose} />
                    <AddCard handleAddCard={(card) => this.createCard(card)}/>
                </div>
            </div>
        );
    }
}

export default SectionContainer
