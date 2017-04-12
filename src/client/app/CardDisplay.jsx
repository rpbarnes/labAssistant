import React from 'react';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.createList = this.createList.bind(this);
    }
    

    handleClick(key) {
        // the text box was clicked on so tell the SectionContainer
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
                <p>{card.text} </p>
                <p>{card.response} </p>
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
