import React, { Component } from 'react';
import { CirclePicker } from 'react-color'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'white'
    };
    this.onColorSelect = this.onColorSelect.bind(this);
  }

  onColorSelect(color, event) {
    this.setState({
      selectedColor: color.hex
    });
  }

  render() {
    const boxStyles = {
      backgroundColor: this.state.selectedColor
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Box Color</h1>
        </header>
        <main className="App-main">
          <div className="box" style={boxStyles}></div>
          <CirclePicker onChange={this.onColorSelect} color={this.state.selectedColor}/>
        </main>
        <footer className="App-footer">
          <p>Made by Grace Casale</p>
        </footer>
      </div>
    );
  }
}

export default App;
