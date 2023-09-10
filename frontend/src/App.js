import { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";

function App() {
// Массив для хранения карточек/notes и обновления состояния
  const [notes, setNotes] = useState([])

  useEffect(()=> {
    fetchNotes()
  }, [])

//Запрос с помощью axios на получение всех карточек с сервера 
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:7070/notes');
      setNotes(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }

  //Запрос с помощью axios на удаление карточки по ее id
  // Этот запрос передается в виде пропс в компонент NoteCard
  // DeleteNote сразу вызывается fetchNotes чтобы выгрузить актальный спмсок карточек с сервера
  const deleteNote = async (id) => {
    try{
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  return (
    <div className="App">
      <div className="update-wrapper">
        <span className="title">
          <p>Notes</p>
        </span>
        {/* Кнопка обновления данных */}
        <button className="recycle-wrapper" onClick={fetchNotes}>
          <span className="material-symbols-outlined recycle">cycle</span>
        </button>
      </div>
      <div className="note-list">
        {/* итеррация по массиву карточек и вызов компонента NoteCard */}
        {notes.map((note)=> (
          <NoteCard key={note.id} note={note} deleteNote={deleteNote}/>
        ))}
      </div>
      <label htmlFor="noteInput">New note</label>
      {/* вызов компонента NoteForm с передачей в пропс функции запроса на сервер, чтобы после отправки заметки можно было обновить данные и с помощью setState обновить массив карточек и перерисовать их в нужном количестве */}
          <NoteForm fetchNotes={fetchNotes}/>
    </div>
  );
}

export default App;
