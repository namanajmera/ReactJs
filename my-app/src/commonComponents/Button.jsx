import React from 'react'

export default function Button(props) {
   return (
      <div>
         <button className="btn btn-primary my-3 mx-1">{props.btnText}</button>
      </div>
   )
}
