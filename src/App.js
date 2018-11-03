import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColor: 'white',
      selectedColor: '#ffff00'
    };
    this.onColorSelect = this.onColorSelect.bind(this);
    this.changeBackground = this.onColorSelect.bind(this);
  }

  onColorSelect(color, event) {
    this.setState({
      selectedColor: color.hex
    });
  }

  changeBackground(event) {
    this.setState({
      boxColor: this.state.selectedColor
    });
  }
  render() {
    const boxStyles = {
      backgroundColor: this.state.boxColor
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Box Color</h1>
        </header>
        <main className="App-main">
          <div className="box" onClick={this.changeBackground} style={boxStyles}></div>
        </main>
        <footer className="App-footer">
          <p>Made by Grace Casale</p>
        </footer>
      </div>
    );
  }
}

export default App;
