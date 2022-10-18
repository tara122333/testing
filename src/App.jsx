import React from 'react'
import HOC from './HOC/HOC';
import Temp from './Temp';



const App = () => {
  return (
    <>
          <HOC path="/" exact element={Temp } />
    </>
  )
}

export default App;