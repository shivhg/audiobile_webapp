import React from 'react'

export default (props) => (
   <audio controls className='audioPlayer' key={props.currentPlaying}>
     <source src={`/api/${props.bookId}/play/${props.currentPlaying}`} type="audio/mp3" />
   </audio>
)