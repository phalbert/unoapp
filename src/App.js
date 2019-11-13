import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'

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

  onSearchInfoChange = (searchValue) => {
    this.setState({
      searchValue
    })
  }

  render() {
    const { items, searchValue } = this.state
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      <div className='App'>
        <h1>Items Rolodex</h1>
        <Search placeholder='Search' onSearchInfoChange={this.onSearchInfoChange} />
        <CardList items={ filteredItems } />
      </div>
    );
  }
}

export default App;
