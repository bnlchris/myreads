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
						
						{
							this.props.books
								.filter(book => book.shelf === 'wantToRead')
								.map(book => (
									<li key={book.id}>
										<Book
											book={book}
											changeShelf={this.props.changeShelf}
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

export default WantToRead