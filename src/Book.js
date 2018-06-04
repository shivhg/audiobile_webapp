import React, { Component } from 'react';
import './Book.css'
import Audio from'./Audio'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {bookId: -1, chapters: [], currentPlaying: 0}
  }

  async componentDidMount() {
    const bookId = document.location.pathname.split('/').pop()
    this.setState({...this.state, bookId: bookId})

    const res = await fetch(`/api/audio-books-list/${bookId}`)
    const body = await res.json()

    this.setState({...this.state, chapters: body.chapters})
  }

  changeChapter(index) {
    window.scrollTo(0, 0)
    this.setState({...this.state, currentPlaying: index})
  }

  nextAudio() {
    setTimeout(() => this.setState({...this.state, currentPlaying: (this.state.currentPlaying + 1)}), 2000)
  }

  render() {
    return(
      <ol>
        <div>
          <h2>{this.state.chapters[this.state.currentPlaying]}</h2>
          <Audio bookId={this.state.bookId} currentPlaying={this.state.currentPlaying} done={this.nextAudio.bind(this)}/>
         </div>

        { this.state.chapters.map((bookName, index) =>
           <li key={index} className='chapter'>
             {bookName}
             <span className='play' onClick={e => {e.preventDefault(); this.changeChapter(index)}}>play</span>
           </li>
         ) }
      </ol>
    )
  }
}

export default Book
