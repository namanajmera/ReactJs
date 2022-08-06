import React, { useContext, useEffect } from 'react'
import noteContext from '../context/NotesContext/noteContext'
import NotesItem from './NotesItem';

export default function Notes() {
   const notesContext = useContext(noteContext);
   // eslint-disable-next-line
   const { notes, setNotes, fetchNotes } = notesContext;
   useEffect(() => {
      /*
     Query logic
     */
      console.log('i fire once');
      fetchNotes();
      // eslint-disable-next-line
   }, []);
   return (
      <div className="row my-3">
         <h2>Notes</h2>
         <p>
         </p>
         {
            notes && notes.map((noteItem, index) => {
               return <NotesItem noteItem={noteItem} key={index} />
            })
         }
      </div>
   )
}
