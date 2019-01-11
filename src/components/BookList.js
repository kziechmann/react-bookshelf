import React, { Component } from 'react';
import Item from './Item';

const BookList = (props) => {

    return (<div className="container">
              <h1>Books</h1>
              <div className="list-group">
                <div className="list-group-item bg-success">
                  <div className="row font-weight-bold">
                    <div className="col-md-1">title</div>
                    <div className="col-md-2">subtitle</div>
                    <div className="col-md-1">author</div>
                    <div className="col-md-2">published</div>
                    <div className="col-md-1">publisher</div>
                    <div className="col-md-1">pages</div>
                    <div className="col-md-3">website</div>
                    <div className="col-md-1">price</div>
                  </div>
                </div>
                   {Object.keys(props.books).map((key, index)=> <Item book={props.books[key]}/> ) }
              </div>
            </div>
          )


}

export default BookList;
