import React, { Component } from 'react';
import CartItem from './CartItem';

class ShoppingCart extends Component {

  getItemsInCart = () => {
    return this.props.books.filter(book=> book.inCart)
  }

  getTotal = () => {
    return this.getItemsInCart().reduce((total,book)=> total+book.price, 0)
  }

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
                    {this.props.books? this.getItemsInCart().map(book=> <CartItem book={book} removeItemFromCart={this.props.removeItemFromCart}/> ) : ""}
                  <div className="list-group-item .d-inline-block">
                   {this.props.books && this.getItemsInCart().length > 0? `Total: $${ this.getTotal().toFixed(2)}` : ""}
                  </div>
                </div>
              </div>
           )
  }

}
export default ShoppingCart;
