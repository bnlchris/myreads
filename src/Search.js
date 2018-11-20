import React, { Component } from 'react';
import Book from './Book';
//BooksApi.js is needed to fetch the data for displaying books
import * as BooksAPI from './BooksAPI';
//Needed for using React Router for navigation
import {Link} from 'react-router-dom';

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
      // check if booksInSearch is an array to map over
      if (booksInSearch.error) {
        this.setState({booksInSearch: []});
      } else {
        this.setState({booksInSearch: booksInSearch});
        }
      })
    } else {
      this.setState({booksInSearch: []});
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
                        this.state.booksInSearch.map(booksInSearch => {
                          // assign "none" for any book without a selected shelf
                          let shelf = 'none';
                          return (
                            <li key={booksInSearch.id}>
                            <Book
                              book={booksInSearch}
                              changeShelf={this.props.changeShelf}
                              currentShelf={shelf}
                            />
                          </li>
                          )
                        })
                      }

                    </ol>
            		
                </div>

                <Link to='/'
                  className='search-footer'
                  ><h4>Back to my book shelves</h4>
                </Link>

          		</div>
			</div>
		)
	}

}

export default Search;