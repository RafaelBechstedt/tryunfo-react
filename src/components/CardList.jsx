import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { savedCard } = this.props;

    const deckOfCards = savedCard.map((element) => (
      <div key={ element.cardName }>
        <Card
          cardName={ element.cardName }
          cardDescription={ element.cardDescription }
          cardAttr1={ element.cardAttr1 }
          cardAttr2={ element.cardAttr2 }
          cardAttr3={ element.cardAttr3 }
          cardImage={ element.cardImage }
          cardRare={ element.cardRare }
          cardTrunfo={ element.cardTrunfo }
        />
      </div>
    ));
    return (
      <section>
        { deckOfCards }
      </section>
    );
  }
}

CardList.propTypes = {
  savedCard: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
