import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const savedNotes = JSON.parse(localStorage.getItem('jotte-data'));
  const [notes, setNotes] = useState(() => 
    savedNotes? savedNotes:[]
  );
  const [searchText, setSearchText] = useState("");//decided to be kept close to the noteslist instead of keeping it in the Search.js
  const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('jotte-data'));
  //   console.log('savedNotes:', savedNotes);
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // },[]);

  //useEffect is giving errors in development build because of double rendering********************************************************************
  
  useEffect(() => {
    localStorage.setItem('jotte-data', JSON.stringify(notes));
  }, [notes])

  const addNote = (data) => {
    setNotes([...notes, { noteid: nanoid(), text: data, date: (new Date()).toLocaleDateString() }]);
  }

  const deleteNote = (id) => {
    let newNotesList = notes.filter((note) => note.noteid !== id);
    setNotes(newNotesList)
  }



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkmode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((element) => element.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App
