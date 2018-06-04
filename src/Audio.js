import React from 'react'

export default (props) => (
   <audio controls className='audioPlayer' key={props.currentPlaying} autoPlay onEnded={e => {e.preventDefault(); props.done()}}>
     <source src={`/api/${props.bookId}/play/${props.currentPlaying}`} type="audio/mp3" />
   </audio>
)