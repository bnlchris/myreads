import React, { Component } from 'react';

class Book extends Component {
	render() {
		
		// check if book has a thumbnail
		let bookHasThumbnail = this.props.book.imageLinks ?
		this.props.book.imageLinks.thumbnail :
		'';

		return (
			<div className='book'>
				
				<div className='book-cover'
					style={{ width: 128, height: 193, backgroundImage: `url("${bookHasThumbnail}")`}}>
				</div>

				<div className='shelve-changer'>
					<select
						value={this.props.book.shelf}
					>
						<option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
					</select>
				</div>

				<div className='book-title'>{this.props.book.title}</div>
				<div className='book-author'>{this.props.book.authors}</div>

			</div>
		)
	}
}

export default Book;