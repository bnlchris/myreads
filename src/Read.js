import React, {Component} from 'react'
import Book from './Book';

class Read extends Component {

	render() {
		return (
			<div className='read'>
				
				<h2>
					Read
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

export default Read