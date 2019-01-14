import React, { Component } from 'react';
import Item from './Item';

const BookList = (props) => {


    return (<div className="container">
              <h1>Books</h1>
              <div className="list-group">
                <div className="list-group-item bg-success">
                  <div className="row font-weight-bold align-content-left">
                    <div className="col-md-1 btn font-weight-bold" style={{color: "blue"}} onClick={props.sortByTitle}>title</div>
                    <div className="col-md-2 mt-2">subtitle</div>
                    <div className="col-md-1 btn font-weight-bold" style={{color: "blue"}} onClick={props.sortByAuthor}>author</div>
                    <div className="col-md-2 mt-2">published</div>
                    <div className="col-md-1 mt-2">publisher</div>
                    <div className="col-md-1 mt-2">pages</div>
                    <div className="col-md-2 mt-2">website</div>
                    <div className="col-md-1 mt-2">price</div>
                    <div className="col-md-1 mt-2"> add To Cart</div>
                  </div>
                </div>
                   {props.books? props.books.filter(book=>JSON.stringify(book).toLowerCase().includes(props.searchText.toLowerCase())).map(book=> <Item book={book} addItemToCart={props.addItemToCart}/> ): ""}
              </div>
            </div>
          )


}

export default BookList;
