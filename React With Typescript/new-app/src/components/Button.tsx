import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Button(props:ButtonsProps) {
   return (
      <button onClick={props.handleClick}>
         Click
      </button>
   )
}

type ButtonsProps = {
   handleClick: () => void
}