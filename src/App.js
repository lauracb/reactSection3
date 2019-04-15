import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Lau" age="25"/> 
        <Person name="Santy" age="21"> My Hobbies: Racing </Person>
        <Person name="Thomy" age="11"/> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'));
  }
}

export default App;
