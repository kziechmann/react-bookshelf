import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
          <nav className="container">
          <form>
            <div className="form-group">
              <label htmlFor="Search"><strong>Search For A Specific Book</strong></label>
              <input type="text" onChange={this.props.search} className="form-control" id="SearchBar" placeholder="Enter the name of a book here...">
              </input>
            </div>
          </form>
          </nav>
           )
  }

}
export default SearchBar;
