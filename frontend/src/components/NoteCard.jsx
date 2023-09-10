import React from 'react'

function NoteCard(props) {
  const {note} = props
  return (
    <div className='note-wrapper' >
        <div className='note' key={note.id}><span className='note-text'>{note.content}</span></div>
        {/* создаем onClick функцию на базе переданного в пропсах deleteNote. Передаем туда id карточки по которой произошел клик на удаление */}
        <button className='delete-btn-wrapper' onClick={()=>props.deleteNote(note.id)}>
            <span className="delete-button" >
              &#10006;
            </span>
        </button>
    </div>
  )
}

export default NoteCard
