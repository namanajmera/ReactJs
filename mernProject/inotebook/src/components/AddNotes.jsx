import React, {useContext} from 'react'
import noteContext from '../context/NotesContext/noteContext'
import useFormInputs from '../hooks/useFormInputs';

export default function AddNotes() {
   const notesContext = useContext(noteContext);
   const { addNote } = notesContext;

   const title = useFormInputs('');
   const description = useFormInputs('');

   const handleAddNote = (event) => {
      event.preventDefault();
      addNote(title.value, description.value, 'Personal');
      title.setValue('');
      description.setValue('');
   }
   
  return (
     <div className='container my-3'>
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' placeholder='Enter here....' {...title}/>
            <div>{title.value}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' placeholder='Enter here....' {...description} />
            <div>{description.value}</div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleAddNote}>Submit</button>
        </form>
      </div>
  )
}
