import React, {Component} from 'react'
import Book from './Book';

class CurrentlyReading extends Component {

	render() {
		return (
			<div className='currently-reading'>	
				
				<h2>
					Currently reading
				</h2>

				<div className='book-shelve'>
					<ol className='grid'>
						<li>
							<Book/>
						</li>
					</ol>
				</div>

			</div>
			)
	}

}

export default CurrentlyReading