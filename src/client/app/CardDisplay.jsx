import React from 'react';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // the text box was clicked on so tell the SectionContainer
        this.props.handleClick();
    }

    render() {
        return (
            <div className='well' onClick={this.handleClick}>
                <p>{this.props.cardText}</p>
            </div>
        );
    }
}

export default CardDisplay
