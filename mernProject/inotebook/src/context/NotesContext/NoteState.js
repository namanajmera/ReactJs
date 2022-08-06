import noteContext from "./noteContext";
import { useEffect, useState } from "react";

const NoteState = (props) => {
   const host = "http://localhost:5000/api/";
   let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
   const headers = {
      'Content-Type': 'application/json',
      'auth-token': token
   }
   useEffect(() => {
      // eslint-disable-next-line
      token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
      headers["auth-token"] = token;
      console.log("token", token);
   }, [])
   // eslint-disable-next-line
   const [notes, setNotes] = useState([]);

   // Add a Note
   const addNote = (title, description, tag) => {
      console.log(title, description, tag);
      addANotesFromApi(title, description, tag);
   }

   // Delete a Note
   const deleteNote = (id) => {
      deleteNoteFromApi(id);
   }

   // Edit a Note
   const editNote = (id, title, description, tag) => {
      updateNoteFromApi(id, title, description, tag);
   }

   const fetchNotes = async () => {
      let url = `${host}notes/fetchallnotes`;
      const response = await fetch(url, {
         method: 'GET',
         headers: headers
      })
      const json = await response.json();
      setNotes(json);
   }

   const addANotesFromApi = async (title, description, tag) => {
      let url = `${host}notes/addnote`;
      const response = await fetch(url, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify({ title, description, tag })
      });
      let data = await response.json();
      if (data) {
         fetchNotes();
      }
   }

   const deleteNoteFromApi = async (id) => {
      let url = `${host}notes/deletenote/${id}`;
      const response = await fetch(url, {
         method: 'DELETE',
         headers: headers,
      });
      let data = await response.json();
      if (data) {
         fetchNotes();
      }
   }

   const updateNoteFromApi = async (id, title, description, tag) => {
      let url = `${host}notes/updatenote/${id}`;
      const response = await fetch(url, {
         method: 'PUT',
         headers: headers,
         body: JSON.stringify({ title, description, tag })
      });
      let data = await response.json();
      if (data) {
         fetchNotes();
      }
   }

   return (
      <noteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, fetchNotes }}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;