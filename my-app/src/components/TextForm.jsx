import React, { useState } from 'react'
import Button from '../commonComponents/Button';

export default function TextForm(props) {
   // const [copied, setCopied] = useState(false);
   const handleUpperCaseClick = () => {
      if (!text) {
         return;
      }
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("All character are in upper case.", "success");
   }

   const handleLowerCaseClick = () => {
      if (!text) {
         return;
      }
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("All character are in lower case.", "success");
   }

   const handleClearText = () => {
      if (!text) {
         return;
      }
      setText('');
      props.showAlert("Cleared all character.", "success");
   }

   const handleCapitalizedCaseClick = () => {
      if (!text) {
         return;
      }
      let finalText = '';
      let lowerCase = text.toLowerCase();
      var arrayOfString = lowerCase.split(' ');
      arrayOfString.forEach((ele) => {
         var upper = ele.charAt(0).toUpperCase();
         var lower = ele.slice(1);
         ele = upper + lower + ' ';
         finalText += ele;
      })
      setText(finalText);
      props.showAlert("All character are Capitalized.", "success");
   }

   const handleCopyText = () => {
      if (!text) {
         return;
      }
      // setCopied(true)
      navigator.clipboard.writeText(text);
      // setTimeout(() => {
      //    setCopied(false)
      // }, 3000);
      props.showAlert("Copied to clipboard.", "success");
   }

   const handleOnChange = (event) => {
      setText(event.target.value)
   }
   const [text, setText] = useState('');

   return (
      <>
         <div style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="container my-3">
            <div className="mb-3">
               <label htmlFor="myBox" className="form-label">{props.heading}</label>
               <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder="Enter your text here....."></textarea>
               {/* {copied ? <p><strong>Copied to Clipboard</strong></p> : ''} */}
               <div style={{ display: 'flex' }}>
                  <Button btnText={"Convert to Uppercase"} handleButton={handleUpperCaseClick} mode={props.mode} />
                  <Button btnText={"Convert to Lowercase"} handleButton={handleLowerCaseClick} mode={props.mode} />
                  <Button btnText={"Convert to Capitalized Case"} handleButton={handleCapitalizedCaseClick} mode={props.mode} />
                  <Button btnText={"Copy Text"} handleButton={handleCopyText} mode={props.mode} />
                  <Button btnText={"Clear Text"} handleButton={handleClearText} mode={props.mode} />
               </div>
               {/* <button className="btn btn-primary my-3 mx-1" style={{ color: props.mode === 'light' ? 'white' : 'black' }} onClick={handleUpperCaseClick}>Convert to Uppercase</button> */}
               {/* <button className="btn btn-primary my-3 mx-1" style={{ color: props.mode === 'light' ? 'white' : 'black' }} onClick={handleLowerCaseClick}>Convert to Lowercase</button> */}
               {/* <button className="btn btn-primary my-3 mx-1" style={{ color: props.mode === 'light' ? 'white' : 'black' }} onClick={handleCapitalizedCaseClick}>Convert to Capitalized Case</button> */}
               {/* <button className="btn btn-primary my-3 mx-1" style={{ color: props.mode === 'light' ? 'white' : 'black' }} onClick={handleCopyText}>Copy Text</button> */}
               {/* <button className="btn btn-primary my-3 mx-1" style={{ color: props.mode === 'light' ? 'white' : 'black' }} onClick={handleClearText}>Clear Text</button> */}
            </div>
         </div>
         <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>Your text Summary</h1>
            <p>{text.trim().split(" ")[0] === '' ? text.trim().split(" ").length - 1 : text.trim().split(" ").length} words and {text.length} characters.</p>
         </div>
         <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1>Preview</h1>
            <p>{text}</p>
         </div>
      </>
   )
}
