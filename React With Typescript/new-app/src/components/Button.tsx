import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Button(props:ButtonsProps) {
   return (
      <button onClick={(event) => props.handleClick(event,1)}>
         Click
      </button>
   )
}

type ButtonsProps = {
   handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}