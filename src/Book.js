import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    constructor(props) {
      super(props);

      this.state = {
        data: props.data
      }
    }

    handleSelect = (event) => {
      BooksAPI.update(this.state.data, event.target.value)
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.data !== this.state.data
    }

    componentWillUpdate() {
      this.setState({
          data: this.props.data
        })
    }

    render() {
        const { data } = this.state
        
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.handleSelect} defaultValue={data.shelf ? data.shelf : 'none'}> 
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{data.title}</div>
              <div className="book-authors">{data.author}</div>
            </div>
        )
    }
}


export default Book;
