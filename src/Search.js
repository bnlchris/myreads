import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div className='search-page'>
				<div className="search-books">
            		<div className="search-books-bar">
              			
              			<div className="search-books-input-wrapper">
              				<h2>Search for further books</h2>
                			<input type="text" placeholder="Search by title or author"/>
              			</div>
            		</div>
            
            		<div className="search-books-results">
              			<ol className="books-grid"></ol>
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