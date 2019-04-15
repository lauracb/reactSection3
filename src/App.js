import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Lau', age: '26'},
      {name: 'Santy', age:'21'},
      {name: 'Thomy', age: '11'}
    ],
    otherState: 'some other value 1'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Laura'
    this.setState( {
      persons: [
        {name: newName, age: '27'},
        {name: 'Santy', age:'21'},
        {name: 'Thomy', age: '10'}
      ] 
    } );
  };

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Max', age: '27'},
        {name: event.target.value, age:'21'},
        {name: 'Thomy', age: '10'}
      ] 
    } );
  }

  render(){
  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={ () => this.switchNameHandler('Maximillian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}> 
          My Hobbies: Racing 
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'));
}

}

export default App;