import React, { useState } from 'react'

export default function TextForm(props) {
   const handleUpperCaseClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
   }
   const handleLowerCaseClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
   }

   const handleOnChange = (event) => {
      setText(event.target.value)
   }
   const [text, setText] = useState('');

   return (
      <>
         <div>
            <div className="mb-3">
               <label htmlFor="myBox" className="form-label">{props.heading}</label>
               <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder="Enter your text here....."></textarea>
               <button className="btn btn-primary my-3 mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
            </div>
         </div>
         <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
         </div>
         <div className="container my-3">
            <h1>Preview</h1>
            <p>{text}</p>
         </div>
      </>
   )
}
