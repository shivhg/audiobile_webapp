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

    const res = await fetch(`api/${bookId}`)
    const body = await res.json()

    this.setState({...this.state, chapters: body.chapters})
  }

  changeChapter(index) {
    console.log(index)
    this.setState({...this.state, currentPlaying: index})
  }

  render() {
    return(
      <ol>
        <div>
          <Audio bookId={this.state.bookId} currentPlaying={this.state.currentPlaying} />
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
