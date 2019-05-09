import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

import Book from './Book'

class BookList extends React.Component {
  
    state = {
        books: []
      }
    
      componentWillMount() {
        this.updateList();
      }

      updateList = () => {
        BooksAPI.getAll().then(result => this.setState({
          books: result
        }))
      }
    
      componentDidUpdate() {
        this.updateList();
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
                     <Book onChange={this.updateList} 
                       data={book}
                     />
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
                     <Book onChange={this.updateList} 
                       data={book}
                     />
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
                     <Book onChange={this.updateList} 
                       data={book}
                     />
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