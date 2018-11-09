import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

class Main extends Component {
	render() {
		return (
			<div className='main-page'>
				<header className="App-header">
          			<h1>
            			MyReads
          			</h1>
        		</header>
        		<CurrentlyReading/>
        		<WantToRead/>
        		<Read/>
        	</div>	
		)	
	}
}

export default Main;