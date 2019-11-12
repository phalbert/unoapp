import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ items: users }))
  }

  render() {
    const { items, searchValue } = this.state
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      <div className='App'>
        <input type='search' placeholder='Search' onChange={e => this.setState({ searchValue: e.target.value })} />
        <CardList items={ filteredItems } />
      </div>
    );
  }
}

export default App;
