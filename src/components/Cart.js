import React, { Component } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    return (<div>
             {Object.keys(props.books).map((key, index)=> <CartItem book={props.books[key]}/> ) }
            </div>)

}

export default Cart;
