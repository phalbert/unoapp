import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      languages: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ languages: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList languages={this.state.languages}/>
      </div>
    ); 
  }
}

export default App;
