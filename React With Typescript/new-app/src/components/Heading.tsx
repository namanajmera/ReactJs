import React from 'react'

type HeadingProps = {
   children:string
}

export default function Heading(props:HeadingProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
