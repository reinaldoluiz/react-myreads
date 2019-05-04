import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  state = {
    books: []
  }

  updateBook(event, id) {
    BooksAPI.update(id, event.target.value)
  }

  handleChange = (e) => {
    let query = e.target.value
    if (query !== ""){
      // BooksAPI.search(query).then(result => this.setState({
      //   books: result
      // }))
      BooksAPI.search(query).then(result =>
        result.error === "empty query" ? this.setState({ books: [] }) : this.setState({books: result})
      )
    } else {
      this.setState({
        books: []
      })
    }
    console.log(this.state.books)
  }
   render(){
       return (
        <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.map((book) =>
                    <li>
                    <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={(e) => {this.updateBook(e, book.id)}} defaultValue={"none"}> 
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
                      </li>
                    )}
                  </ol>
            </div>
          </div>
        </div>
       )
   }
}

export default Search;