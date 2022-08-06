import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial = [
      {
         "_id": "62ecef2782c58fdbd52365ae",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title",
         "description": "First Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam..",
         "tag": "Personal",
         "date": "2022-08-05T10:21:27.394Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      }
   ]
   // eslint-disable-next-line
   const [notes, setNotes] = useState(notesInitial)

   // Add a Note
   const addNote = (title,description,tag) => {
      console.log(title,description,tag);
      let note = {
         "_id": "62ecef3782c58fdbd5236590",
         "user": "62ecee5682c58fdbd52365ab",
         title,
         description,
         tag,
         "date": "2022-08-05T10:21:27.394Z",
         "__v": 0
      }
      console.log("notes", notes);
      setNotes(notes.concat(note))
      console.log("notes", notes);
   }

   // Delete a Note
   const deleteNote = (id) => {
      let noteIndex = notes.findIndex((elem) => { return elem._id === id });
      notes.splice(noteIndex, 1)
      console.log("notesData ==>", notes);
      setNotes(notes)
      console.log(notes);
   }

   // Edit a Note
   const editNote = (id) => {
      let noteIndex = notes.findIndex((elem) => { return elem._id === id });
      console.log(noteIndex);

   }

   return (
      <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;