import React, { useState } from 'react'

export default function TextForm(props) {
   const handleUpperCaseClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
   }

   const handleOnChange = (event) => {
      setText(event.target.value)
   }
   const [text, setText] = useState('');

   return (
      <div>
         <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder="Enter your   text here....."></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
         </div>
      </div>
   )
}