import React, { Component } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
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
    const newState = {books:[...books]}
    newState['searchText'] = ""
    this.setState(newState)
  }

  addItemToCart = (event) => {
    const newState = {...this.state}
    newState.books[event.target.id-1].inCart = true
    this.setState(newState)
  }

  removeItemFromCart = (event) => {
    const newState = {...this.state}
    newState.books[event.target.id-1].inCart = false
    this.setState(newState)
  }

  searchBooks = (event) => {
    const newState = {...this.state}
    newState['searchText'] = event.target.value
    console.log(event.target.value)
    this.setState(newState)
  }

  render() {
    return (<div className="row">
              <div className="col-9">
                    <SearchBar search={this.searchBooks}/>
                    <BookList books={this.state.books} addItemToCart={this.addItemToCart} searchText={this.state.searchText}/>
              </div>
              <div className="col-3">
                <ShoppingCart books={this.state.books} removeItemFromCart={this.removeItemFromCart}/>
              </div>
            </div>
          )
  }

}
export default App;
