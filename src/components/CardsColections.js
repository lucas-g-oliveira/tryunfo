import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsColections extends React.Component {
  render() {
    const { cards, deleteCard, onChangeFilterCards } = this.props;
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
        <label htmlFor="filter-nome">
          <input
            id="filter-nome"
            name="name"
            data-testid="name-filter"
            placeholder="name-card"
            type="text"
            onChange={ onChangeFilterCards }
          />
        </label>
        <label htmlFor="select-rare">
          <select
            id="select-rare"
            name="rare"
            data-testid="rare-filter"
            onChange={ onChangeFilterCards }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor='"filter-trunfo"'>
          <input
            name="trunfo"
            id="filter-trunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ onChangeFilterCards }
          />
          Super Trunfo
        </label>
        {lstCards}
      </div>
    );
  }
}

CardsColections.propTypes = {
  cards: PropTypes.instanceOf(Object).isRequired,
  deleteCard: PropTypes.func.isRequired,
  onChangeFilterCards: PropTypes.func.isRequired,
};

export default CardsColections;
