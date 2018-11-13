import React, {Component} from 'react'
import Book from './Book'

class WantToRead extends Component {

	render() {
		return (
			<div className='want-to-read'>
				
				<h2>
					Want to read
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

export default WantToRead