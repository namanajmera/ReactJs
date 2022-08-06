import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial = [
      {
         "_id": "62ecef2782c58fdbd52365ae",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title",
         "description": "First Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam..",
         "tag": "Personal",
         "date": "2022-08-05T10:21:27.394Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      },
      {
         "_id": "62ecef3782c58fdbd52365b1",
         "user": "62ecee5682c58fdbd52365ab",
         "title": "My Title2",
         "description": "Second Title Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse delectus, et debitis qui autem dicta maiores, repellat reprehenderit non cum doloremque nemo ipsa! Distinctio ut dolorem minima eveniet ad totam.",
         "tag": "Personal",
         "date": "2022-08-05T10:21:43.498Z",
         "__v": 0
      }
   ]
   // eslint-disable-next-line
   const [notes, setNotes] = useState(notesInitial)

   return (
      <noteContext.Provider value={{ notes, setNotes }}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;