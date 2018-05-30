import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AudioBooksList extends Component {
  constructor(props) {
    super(props)
    this.state = {availableBooks: []}
  }

  async componentDidMount() {
    let res = await fetch('/api/audio-books-list')
    let body = await res.json()

    this.setState({availableBooks: body.availableAudioBooks})
  }

  render() {
    return(
      <ol>
        {
          this.state.availableBooks.map((bookName, index) => <li key={index}><Link to={`/audio-books-list/${index}`}>{bookName}</Link></li>)
        }
      </ol>
    )
  }
}

export default AudioBooksList
