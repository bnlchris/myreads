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
						
						{
							this.props.books
								.filter(book => book.shelf === 'read')
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

			</div>
		)
	}

}

export default Read