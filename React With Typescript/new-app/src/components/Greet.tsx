import React from 'react'

export default function Greet(props:GreetProps) {

   const {name,messageCount} = props;
  return (
    <div>
      <h2>Welcome {name}! You have {messageCount} unread message.</h2>
    </div>
  )
}

type GreetProps = {
   name:string,
   messageCount:number
}