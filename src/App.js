import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import AudioBooksList from './AudioBooksList'
import Book from './Book'

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
      </div>
    );
  }
}

export default App;
