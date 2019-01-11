import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
          <nav className="container">
          <form>
            <div class="form-group">
              <label forHTML="Search"><strong>Search For A Specific Book</strong></label>
              <input type="text" className="form-control" id="SearchBar" placeholder="Enter the name of a book here...">
              </input>
            </div>
          </form>
          </nav>
           )
  }

}
export default SearchBar;
