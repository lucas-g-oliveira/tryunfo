import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>Tryunfo</h1>
        <div className="parent-omponents-div">
        <Form></Form>
        <Card></Card>
        </div>
      </div>
    );
  }
}

export default App;
