import React, { Component } from 'react';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  state={

  }

  componentDidMount = async() => {
    const response = await fetch('http://localhost:8082/api/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const books = await response.json()
    this.setState(books)
  }

  render() {
    return (<div>
                  <BookList books={this.state}/>
            </div>)
  }

}
export default App;
