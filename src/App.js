import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import Search from './Search'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={BookList} />
          <Route path="/search" component={Search} />
      </Switch>
      </ BrowserRouter>
    )
  }
}

export default BooksApp