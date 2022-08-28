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

  validUnit = (att) => {
    const max = 90;
    const min = 0;
    const results = {};
    if (att === '') {
      results.pass = false;
      results.value = 0;
      results.msg = 'Valor min: 0, max: 90!';
    } else {
      results.pass = (att >= min && att <= max);
      results.value = parseInt(att, 10);
      results.msg = (results.pass) ? '' : 'Valor fora do intervalo permitido';
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
    this.setState({ [name]: atributo }, this.updateButton());
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
      this.updateButton(),
    );
  };

  deleteCard = (event) => {
    const { cards } = this.state;
    const { name } = event.target;
    const listTemp = cards;
    console.log(event.target.name);
    this.setState({
      cards: listTemp.filter((e) => e.cardName !== name),
    }, () => this.updateButton());
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
            key={ Math.random() }
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
