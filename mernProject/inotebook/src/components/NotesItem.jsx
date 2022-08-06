import React, { useContext } from 'react'
import noteContext from '../context/NotesContext/noteContext'

export default function NotesItem(props) {
   const { title, description, tag, _id } = props.noteItem;
   const notesContext = useContext(noteContext);
   const { deleteNote,editNote } = notesContext;

   const handleDelete = (id) => {
      console.log("id",id);
      deleteNote(id);
   }
   
   const handleEdit = (id) => {
      editNote(id, "title", "description", "tag");
      console.log("id",id);
   }

   return (
      <div className='col-md-3'>
         <div className="card my-3">
            <div className="card-body">
               <div className="d-flex justify-content align-items">
                  <h5 className="card-title">{title}</h5>
                  <img className='mx-2' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="" style={{ width: "25px", height: "25px", cursor: "pointer" }} onClick={() => handleDelete(_id)} />
                  <img className='mx-2' src="https://as1.ftcdn.net/v2/jpg/03/73/50/00/1000_F_373500029_TSJ1vErHtB2nUtHoAtaFAwe47fqSJbEd.jpg" alt="" style={{ width: "25px", height: "25px", cursor: "pointer" }} onClick={() => handleEdit(_id)}/>
               </div>
               <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
               <p className="card-text">{description}</p>
            </div>
         </div>
      </div>
   )
}
