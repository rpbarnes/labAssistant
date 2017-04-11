import React from 'react';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    cards: this.props.cardsToDisplay
        //}
        this.handleClick = this.handleClick.bind(this);
        this.createList = this.createList.bind(this);
    }
    
    //shouldComonentUpdate(nextProps) {
    //    const diffCards = this.props.car

    handleClick(key) {
        // the text box was clicked on so tell the SectionContainer
        // Need to tell SectionContainer who was clicked
        this.props.handleClick(key);
    }

    createList(card) {
        var key = card.id;
        if (card.response === '') {
            return (
            <li key={key} className='well primary-text-color' onClick={this.handleClick.bind(this,key)}>
                {card.text}
            </li>
            );
        } else {
            return (
            <li key={key} className='well primary-text-color' onClick={this.handleClick.bind(this,key)}>
                {card.text}
                {card.response}
            </li>
            );
        }
    }


    render() {
        var cardItems = this.props.cardsToDisplay.map(this.createList);
        return (
            <ul>
                {cardItems}
            </ul>
        );
    }
}

export default CardDisplay
