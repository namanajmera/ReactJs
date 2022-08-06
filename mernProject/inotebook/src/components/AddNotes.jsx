import React, {useContext} from 'react'
import noteContext from '../context/NotesContext/noteContext'
import useFormInputs from '../hooks/useFormInputs';

export default function AddNotes() {
   const notesContext = useContext(noteContext);
   const { addNote } = notesContext;

   const title = useFormInputs('');
   const description = useFormInputs('');
   const tag = useFormInputs('');

   const handleAddNote = (event) => {
      event.preventDefault();  
      addNote(title.value, description.value, tag.value);
      title.setValue('');
      description.setValue('');
      tag.setValue('');
   }

  return (
     <div className='container my-3'>
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' placeholder='Enter here....' value={title.value} onChange={title.onChange}/>
            <div>{title.value}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' placeholder='Enter here....' value={description.value} onChange={description.onChange} />
            <div>{description.value}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="tag" name='tag' placeholder='Enter here....' value={tag.value} onChange={tag.onChange} />
            <div>{tag.value}</div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!title.value || !description.value || !tag.value} onClick={handleAddNote}>Add Note</button>
        </form>
      </div>
  )
}
