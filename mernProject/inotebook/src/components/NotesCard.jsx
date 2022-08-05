import React from 'react'

export default function NotesCard(props) {
   const { title, description, tag } = props.note;
   return (
      <div className="card my-3 mx-3" style={{width: "18rem"}}>
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
            <p className="card-text">{description}</p>
         </div>
      </div>
   )
}
