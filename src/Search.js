import React, { Component } from 'react';
import Book from './Book';
//import for displaying the respective items on the search page
import escapeRegExp from 'escape-string-regexp'
//BooksApi.js is needed to fetch the data for displaying books
import * as BooksAPI from './BooksAPI';

class Search extends Component {
	
  state = {
    query: '',
    booksInSearch: []
  }

  // method to update the UI to changes in the query field
  updateQuery = (query) => {
    this.setState ({
      query: query
    })
    this.getBooksFromSearch(query);
  }

  getBooksFromSearch = (query) => {
    //check if there is any typing in the input field
    if (query) {
      BooksAPI.search(query).then((booksInSearch) => {
      this.setState({booksInSearch: booksInSearch})
      })
    } else {
      this.setState({booksInSearch: []})
    }
  }

  render() {
		return (
			<div className='search-page'>
				<div className="search-books">
            		<div className="search-books-bar">
              			
              			<div className="search-books-input-wrapper">
              				<h2>Search for further books</h2>
                			<input 
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                      />
              			</div>
            		</div>
            
            		<div className="search-books-results">
              			
                    <ol className="grid">

                      {
                        this.state.booksInSearch.map(booksInSearch => (
                          <li key={booksInSearch.id}>
                            <Book
                              book={booksInSearch}
                            />
                          </li>
                        ))
                      }

                    </ol>
            		
                </div>

                <footer className='search-footer'>
                  <h4>Back to my book shelves</h4>
                </footer>

          		</div>
			</div>
		)
	}

}

export default Search;