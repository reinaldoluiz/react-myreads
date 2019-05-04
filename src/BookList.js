import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  
    state = {
        books: []
      }
    
      componentWillMount() {
        BooksAPI.getAll().then(result => this.setState({
          books: result
        }))
      }
    
      updateBook(event, id) {
        BooksAPI.update(id, event.target.value)
      }
    
      componentDidUpdate() {
        BooksAPI.getAll().then(result => this.setState({
          books: result
        }))
      }
    
   render(){
       return(
        <div className="app">
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">  
                  {this.state.books.map((book) =>
                     book.shelf === "currentlyReading" ?  <li>
                     <div className="book">
                     <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                         <div className="book-shelf-changer">
                         <select onChange={(e) => {this.updateBook(e, book.id)}} defaultValue={book.shelf}> 
                             <option value="move" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
         
                         </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">{book.author}</div>
                     </div>
                     </li> : ""
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.state.books.map((book) =>
                     book.shelf === "wantToRead" ?  <li>
                     <div className="book">
                     <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                         <div className="book-shelf-changer">
                         <select onChange={(e) => {this.updateBook(e, book.id)}} defaultValue={book.shelf}> 
                             <option value="move" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
         
                         </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">{book.author}</div>
                     </div>
                     </li> : ""
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.state.books.map((book) =>
                     book.shelf === "read" ?  <li>
                     <div className="book">
                     <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                         <div className="book-shelf-changer">
                         <select onChange={(e) => {this.updateBook(e, book.id)}} defaultValue={book.shelf}> 
                             <option value="move" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
         
                         </select>
                         </div>
                     </div>
                     <div className="book-title">{book.title}</div>
                     <div className="book-authors">{book.author}</div>
                     </div>
                     </li> : ""
                  )}     
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
       )
   }
}

export default BookList;