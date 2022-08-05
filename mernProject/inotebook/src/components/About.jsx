import React,{ useContext, useEffect } from 'react'
import noteContext from '../context/NotesContext/noteContext'

export default function About() {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      This is About {a.state.name} and his Class is {a.state.class}.
    </div>
  )
}