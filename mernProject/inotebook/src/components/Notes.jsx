import React, { useContext } from 'react'
import noteContext from '../context/NotesContext/noteContext'
import NotesItem from './NotesItem';

export default function Notes() {
   const notesContext = useContext(noteContext);
   // eslint-disable-next-line
   const { notes, setNotes } = notesContext;
   return (
      <div className="row my-3">
         <h2>Notes</h2>
         {
            notes.map((noteItem, index) => {
               return <NotesItem noteItem={noteItem} key={index} />
            })
         }
      </div>
   )
}
