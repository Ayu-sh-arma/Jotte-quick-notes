import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (e) => {
        //example of how checks should be done in the event handler function
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }
    const handleSave = (e) => {

        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }


    }


    return (
        <div className='note new'>
            <textarea name="textArea" id="textArea" cols="10" rows="8" placeholder='Add text here!' onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
