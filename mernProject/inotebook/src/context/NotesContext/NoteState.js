import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const s1 = {
      "name": "Naman",
      "class": "First Class"
   }
   const [state, setState] = useState(s1);

   const update = () => {
      setTimeout(() => {
         setState({
            name:"Hello",
            class:"No"
         })
      }, 2000);
   }

   return (
      <noteContext.Provider value={{state,update}}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;