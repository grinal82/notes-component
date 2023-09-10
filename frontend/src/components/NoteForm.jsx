import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = (props) => {
  const [content, setContent] = useState('');

  //POST запрос с помощью axios на добавление карточки на сервер
  const handleAddNote = async () => {
    try {
      await axios.post('http://localhost:7070/notes', {
        id: 0,
        content: content,
      });
      setContent('');
      // запрашиваем с сервера актуальные данные по карточкам
      props.fetchNotes()
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div className="input-wrapper">
        <textarea 
        type="text" 
        value={content} 
        onChange={(e)=>setContent(e.target.value)}></textarea>
        
        <button className="submit-btn" onClick={handleAddNote}>
          <span className="material-symbols-outlined send-arrow">play_arrow</span>
        </button>
      </div>
  );
};

export default NoteForm;