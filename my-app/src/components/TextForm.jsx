import React, { useState } from 'react'

export default function TextForm(props) {
   const [copied, setCopied] = useState(false);
   const handleUpperCaseClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
   }

   const handleLowerCaseClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
   }

   const handleClearText = () => {
      setText('');
   }

   const handleCapitalizedCaseClick = () => {
      let finalText = '';
      let lowerCase = text.toLowerCase();
      var arrayOfString = lowerCase.split(' ');
      arrayOfString.forEach((ele) => {
         var upper = ele.charAt(0).toUpperCase();
         var lower = ele.slice(1);
         ele = upper + lower + ' ';
         finalText += ele;
      })
      console.log("arrayOfString ==> ", arrayOfString);
      setText(finalText);
   }

   const handleCopyText = () => {
      setCopied(true)
      navigator.clipboard.writeText(text);
      setTimeout(() => {
         setCopied(false)
      }, 3000);
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
               {copied ? <p><strong>Copied to Clipboard</strong></p> : ''}
               <button className="btn btn-primary my-3 mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleCapitalizedCaseClick}>Convert to Capitalized Case</button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleCopyText}>Copy Text</button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear Text</button>
            </div>
         </div>
         <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text.trim().split(" ")[0] === '' ? text.trim().split(" ").length - 1 : text.trim().split(" ").length} words and {text.length} characters.</p>
         </div>
         <div className="container my-3">
            <h1>Preview</h1>
            <p>{text}</p>
         </div>
      </>
   )
}
