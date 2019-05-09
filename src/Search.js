import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

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
                     <Book data={book} />
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