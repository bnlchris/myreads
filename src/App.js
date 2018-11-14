import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Search from './Search';
//BooksApi.js is needed to fetch the data for displaying books
import * as BooksAPI from './BooksAPI';

class App extends Component {
  
	state = {
		books: []
	}

	// fetches the data for rendering the books from the server
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}

	// changes the respective book shelf on click
	changeShelf(book, shelf) {
		BooksAPI.update(book, shelf)

		// fetch data again, after new alignment of books
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}

  render() {
    return (
      <div className="App">
        
        <Main
        	books={this.state.books}
        	changeShelf={this.changeShelf}
        />

      </div>
    );
  }
}

export default App;
