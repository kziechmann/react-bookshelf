import React, { Component } from 'react';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  render() {
    return (
              <div className="container">
                <h1>Shopping Cart</h1>
                <div className="list-group">
                  <div className="list-group-item bg-warning">
                    <div className="row font-weight-bold justify-content-center">
                      <div className="col-4">title</div>
                      <div className="col-4">price</div>
                      <div className="col-2">remove item</div>
                    </div>
                  </div>
                    {this.props.books? this.props.books.filter(book=> book.inCart).map(book=> <CartItem book={book} removeItemFromCart={this.props.removeItemFromCart}/> ) : ""}
                </div>
              </div>
           )
  }

}
export default ShoppingCart;
