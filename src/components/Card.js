import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const isSuperTrunfo = (!cardTrunfo) ? [] : [
      <div
        data-testid="trunfo-card"
        className="cartaRara"
        key={ Math.random() }
      >
        Super Trunfo
      </div>];

    return (
      <div id="section-Card">
        <h2 data-testid="name-card">{cardName}</h2>
        <img alt={ cardName } data-testid="image-card" src={ cardImage } />
        <div>
          <p data-testid="description-card" id="description-card">{cardDescription}</p>
        </div>
        <div className="divAtributo">
          Atributo1
          <h3 data-testid="attr1-card">{cardAttr1}</h3>
        </div>
        <div className="divAtributo">
          Atributo2
          <h3 data-testid="attr2-card">{cardAttr2}</h3>
        </div>
        <div className="divAtributo">
          Atributo3
          <h3 data-testid="attr3-card">{cardAttr3}</h3>
        </div>
        <div className="divAtributo">
          Raridade
          <h3 data-testid="rare-card">{cardRare}</h3>
        </div>
        {[isSuperTrunfo]}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
