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

            		<div className='button-to-close-search'>
            			<button type="button">Back to my book shelves</button>
            		</div>
            
            		<div className="search-books-results">
              			<ol className="books-grid"></ol>
            		</div>

          		</div>
			</div>
		)
	}
}

export default Search;