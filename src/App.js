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

  render() {
    console.log(this.state.books);
    return (
      <div className="App">
        
        <Main/>

      </div>
    );
  }
}

export default App;
