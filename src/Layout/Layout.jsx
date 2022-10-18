import React from 'react'

const Layout = (props) => {
  return (
    <>
        <h1>This is Layout Heading in the react app</h1>

        {props.children}
    </>
  )
}

export default Layout;