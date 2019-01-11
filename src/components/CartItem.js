import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    return (<span>
             {JSON.stringify(this.props.book)}
            </span>)
  }

}
export default CartItem;
