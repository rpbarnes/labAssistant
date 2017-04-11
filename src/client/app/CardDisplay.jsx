import React from 'react';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cardsToDisplay
        }
        this.handleClick = this.handleClick.bind(this);
        this.createList = this.createList.bind(this);
    }

    handleClick(key) {
        // the text box was clicked on so tell the SectionContainer
        // Need to tell SectionContainer who was clicked
        this.props.handleClick(key);
    }

    createList(card) {
        var key = card.id;
        if (card.response === '') {
            return (
            <div key={key} className='well primary-text-color' onClick={this.handleClick.bind(this,key)}>
                <p>{card.text}</p>
            </div>
            );
        } else {
            return (
            <div key={key} className='well primary-text-color' onClick={this.handleClick.bind(this,key)}>
                <p>{card.text}</p>
                <p>{card.response}</p>
            </div>
            );
        }
    }


    render() {
        var cardItems = this.state.cards.map(this.createList);
        return (
            <ul>
                {cardItems}
            </ul>
        );
    }
}

export default CardDisplay
