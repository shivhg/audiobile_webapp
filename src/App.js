import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import AudioBooksList from './AudioBooksList'
import Book from './Book'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stay with us</h1>
        </header>
        <Route exact path='/audio-books-list' component={AudioBooksList} />
        <Route path='/audio-books-list/:id' component={Book} />
        <Link to='/audio-books-list'>Books list</Link>
      </div>
    );
  }
}

export default App;
