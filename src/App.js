import React, { Component } from 'react';
import './App.css';

const spanishWords = [
  'demander: to sue',
  'correr: to run',
  'vendar: to bandage',
  'terco: stubborn',
  'hundir: to sink',
  'una encuesta: a survey',
  'impedir: to prevent'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: spanishWords
    };
  }
  render() {
    let random = Math.floor(Math.random() * spanishWords.length) + 1;
    return (
      <div className="App">
        <div className="Container">
          <h1>{this.state.words[random - 1]}</h1>
        </div>
      </div>
    );
  }
}

export default App;
