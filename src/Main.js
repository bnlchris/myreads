import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
//Needed for using React Router for navigation
import {Link} from 'react-router-dom';

class Main extends Component {
	render() {
    return (
			<div className='main-page'>
				<header className='app-header'>
          <h1>MyReads</h1>
        </header>

        <CurrentlyReading books={this.props.books} changeShelf={this.props.changeShelf}/>
        <WantToRead books={this.props.books} changeShelf={this.props.changeShelf}/>
        <Read books={this.props.books} changeShelf={this.props.changeShelf}/>

        <Link to='/Search'
            className='app-footer'
            ><h4>Click here to search for further books</h4>
        </Link>

      </div>	
		)	
	}
}

export default Main;