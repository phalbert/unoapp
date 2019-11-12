import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      languages: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({languages: users}))
  }

  render() {
    return (
      <div className="App">
        {
  this.state.languages.map(language => <h1 key={language.id}> { language.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
