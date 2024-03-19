import React from 'react'

export const Layout = (props) => {
    console.log(props)

  return (
    <>
        <h1>{props.title}</h1>
        {props.children}
    </>
    )
}
