import React from 'react'

type TestProps = {
   children: React.ReactNode;
}

export default function Test(props: TestProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
