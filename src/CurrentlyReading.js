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
						
						{
							this.props.books
								.filter(book => book.shelf === 'currentlyReading')
								.map(book => (
									<li key={book.id}>
										<Book
											book={book}
										/>
									</li>
								))
						}

					</ol>
				</div>

				<hr/>

			</div>
			)
	}

}

export default CurrentlyReading