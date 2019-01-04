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
      words: spanishWords,
      inputSpanish: '',
      inputEnglish: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateWords = event => {
    event.preventDefault();
    this.setState({
      words: [
        ...this.state.words,
        `${this.state.inputSpanish}:${this.state.inputEnglish}`
      ]
    });
  };

  render() {
    let random = Math.floor(Math.random() * spanishWords.length);
    // console.log(this.state.words);
    // console.log('Inputs:', this.state.inputSpanish, this.state.inputEnglish);
    return (
      <div className="App">
        <div className="Container">
          <h1>{this.state.words[random]}</h1>
          <div className="inputs">
            <form>
              <input
                placeholder="Enter Spanish word.."
                onChange={this.handleChange}
                name="inputSpanish"
              />
              <input
                placeholder="Enter translation.."
                onChange={this.handleChange}
                name="inputEnglish"
              />
              <input
                className="button"
                type="submit"
                onClick={this.updateWords}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
