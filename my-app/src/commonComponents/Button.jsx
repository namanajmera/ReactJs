import React from 'react'

export default function Button(props) {
   return (
      <div>
         <button className="btn btn-primary my-3 mx-1" onClick={props.handleButton} style={{ color: props.mode === 'light' ? 'white' : 'black' }}>{props.btnText}</button>
      </div>
   )
}
