import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/styles/App.css';
import CardsColections from './components/CardsColections';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  /* strOptions = ({ str, removeSpaces = false, upper = false, lower = false }) => {
    let value = '';
    let temp = '';
    if (removeSpaces) {
      for (let i = 0; i < str.length(); i += 1) {
        value += (str[i] === ' ') ? '_' : str[i];
      }
    }
    console.log(`value: ${value} str: ${str}`);
    temp = value;
    value = (upper) ? value.toUpperCase() : value;
    value = (lower) ? value.toLocaleLowerCase() : value;
    value = (upper && lower) ? temp : value;
    return value;
  } */

  validUnit = (att) => {
    const max = 90;
    const min = 0;
    const results = {};
    if (att === '') {
      results.pass = false;
      results.value = 0;
      results.msg = 'Valor min: 1, max: 90!';
    } else {
      results.pass = (att > min && att <= max);
      results.value = parseInt(att, 10);
      results.msg = (results.pass) ? '' : 'Valor fora do intervalo permitido';
    }
    if (Number(att) < 0) {
      this.setState({ isSaveButtonDisabled: true });
    }
    return results;
  };

  validAtbr = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const vMax = 210;
    let soma = false;
    const listResult = [];
    const at1 = this.validUnit(cardAttr1);
    const at2 = this.validUnit(cardAttr2);
    const at3 = this.validUnit(cardAttr3);
    listResult.push(at1.pass);
    listResult.push(at2.pass);
    //  console.log(`status: ${at2.pass} || value: ${at2.value}`);
    listResult.push(at3.pass);
    soma = (at1.value + at2.value + at3.value) <= vMax;
    listResult.push(soma);
    return listResult.every((e) => e === true);
  };

  validation = () => {
    const {
      cardImage,
      cardDescription,
      cardName,
      cards,
    } = this.state;
    const listResult = [];
    listResult.push(cardName !== '');
    listResult.push(cardDescription !== '');
    listResult.push(cardImage !== '');
    listResult.push(this.validAtbr());
    listResult.push(!cards.some((e) => e.cardName === cardName));
    console.log(!cards.some((e) => e.cardName === cardName));
    const exit = !listResult.every((e) => e === true);

    return exit;
  };

  updateButton = () => {
    const { cards, isSaveButtonDisabled } = this.state;
    this.setState({
      isSaveButtonDisabled: this.validation(),
      hasTrunfo: cards.some((e) => e.cardTrunfo === true),
    }, () => {
      const button = document.getElementById('form-button');
      const bgcolor = (color) => { button.style.background = color; };
      if (!isSaveButtonDisabled) {
        bgcolor('blue');
      } else {
        bgcolor('gray');
      }
    });
  };

  onInputChange = async (event) => {
    const { name, value, checked } = event.target;
    const atributo = (name === 'cardTrunfo') ? checked : value;
    this.setState({ [name]: atributo }, this.updateButton);
  };

  fxNewCard = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      /*  key: this.strOptions({
         str: cardName,
         removeSpaces: true,
         lower: true,
       }), */
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,

    };
    return newCard;
  };

  onSaveButtonClick = () => {
    const { cards } = this.state;
    const newCard = this.fxNewCard();

    this.setState(
      (
        cards.push(newCard),
        {
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
        }
      ),
      this.updateButton,
    );
    this.render();
  };

  render() {
    this.validation();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
    } = this.state;

    return (
      <div id="home">
        <h1>Tryunfo</h1>
        <div className="parent-omponents-div">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <Card
            key="123456789"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <CardsColections
            cards={ cards }
            deleteCard={ this.deleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
