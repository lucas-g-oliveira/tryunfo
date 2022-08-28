import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsColections extends React.Component {
  render() {
    const { cards, deleteCard } = this.props;

    const lstCards = cards.map((e) => (
      <div
        key={ Math.random() }
      >
        <button
          type="button"
          name={ e.cardName }
          id="close-button"
          data-testid="delete-button"
          onClick={ deleteCard }
        >
          <span className="material-symbols-outlined">
            delete
          </span>
          Excluir
        </button>

        <Card
          key={ `${Math.random()}` }
          cardName={ e.cardName }
          cardDescription={ e.cardDescription }
          cardAttr1={ e.cardAttr1 }
          cardAttr2={ e.cardAttr2 }
          cardAttr3={ e.cardAttr3 }
          cardImage={ e.cardImage }
          cardRare={ e.cardRare }
          cardTrunfo={ e.cardTrunfo }
        />
      </div>));

    return (
      <div>
        {lstCards}
      </div>
    );
  }
}

CardsColections.propTypes = {
  cards: PropTypes.instanceOf(Object).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardsColections;
