import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <>
            <div className="notes-list">
                <AddNote handleAddNote={handleAddNote} />
                {notes.map((element) => (<Note key={element.noteid} id={element.noteid} text={element.text} date={element.date} handleDeleteNote={handleDeleteNote} />))}
            </div>
        </>
    )
}

export default NotesList
