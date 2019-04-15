import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Lau', age: '26'},
      {name: 'Santy', age:'21'},
      {name: 'Thomy', age: '11'}
    ],
    otherState: 'some other value 1'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Laura'
    setPersonsState({
      persons: [
        {name: 'Laura', age: '27'},
        {name: 'Santy', age:'21'},
        {name: 'Thomy', age: '10'}
      ] 
    });
  };

  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'));
  }


export default app;