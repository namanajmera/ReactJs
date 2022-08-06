import React from 'react'

export default function NotesItem(props) {
   const { title, description, tag } = props.noteItem;

   return (
      <div className='col-md-3'>
         <div className="card my-3">
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
               <p className="card-text">{description}</p>
            </div>
         </div>
      </div>
   )
}
