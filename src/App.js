import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/styles/App.css'

class App extends React.Component {
  state = {
    cardName: "Nome",
    cardDescription: "Descrição",
    cardAttr1: "1",
    cardAttr2: "2",
    cardAttr3: "3",
    cardImage: "https://aeroin.net/wp-content/uploads/2022/02/dasfsdgfrtg48rt4r48-1024x683.jpg",
    cardRare: "raridade",
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
   this.setState({ [name]: value });

    //console.log(`[${name}]:${value}`);
    //console.log(this.state);
  }
  onSaveButtonClick = () => {
    console.log("onSaveButtonClich");
  }

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
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;

    return (
      <div id="home">
        <h1>Tryunfo</h1>
        <div className="parent-omponents-div">
          <Form
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
            hasTrunfo={hasTrunfo}
            isSaveButtonDisabled={isSaveButtonDisabled}
            onInputChange={this.onInputChange}
            onSaveButtonClick={this.onSaveButtonClick}
          />


          <Card
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
          ></Card>
        </div>
      </div>
    );
  }
}

export default App;
