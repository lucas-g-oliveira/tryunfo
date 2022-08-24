import React from 'react';
import './styles/Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      /*
      hasTrunfo,
      */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div id="section-form">
        <label htmlFor="form-name">
          Nome:
          <input
            id="form-name"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            placeholder="nome"
          />
        </label>
        <label htmlFor="form-textarea">
          Descrição:
          <textarea
            id="form-textarea"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
            data-testid="description-input"
            placeholder="descrição"
          />
        </label>
        <label htmlFor="form-at1">
          Atr1
          <input
            id="form-at1"
            value={ cardAttr1 }
            name="cardAttr1"
            type="number"
            onChange={ onInputChange }
            data-testid="attr1-input"
            placeholder="Atributo1"
          />
        </label>
        <label htmlFor="form-at2">
          Atr2
          <input
            id="form-at2"
            value={ cardAttr2 }
            name="cardAttr2"
            type="number"
            onChange={ onInputChange }
            data-testid="attr2-input"
            placeholder="Atributo2"
          />
        </label>
        <label htmlFor="form-at3">
          Atr3
          <input
            id="form-at3"
            value={ cardAttr3 }
            name="cardAttr3"
            type="number"
            onChange={ onInputChange }
            data-testid="attr3-input"
            placeholder="Atributo3"
          />
        </label>
        <label htmlFor="form-imginput">
          Link image:
          <input
            id="form-imginput"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            placeholder="imageLink"
          />
        </label>
        <label id="select-label" htmlFor="form-select">
          Raridade:
          <select
            id="form-select"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label id="check-label" htmlFor="form-check">
          <input
            id="form-check"
            type="checkbox"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>

        <button
          type="button"
          id="form-button"
          disabled={ isSaveButtonDisabled }
          name="cardTrunfo"
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
