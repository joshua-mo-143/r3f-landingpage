import React, { useState, FC} from 'react'
import Meme from './pages/Home'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Meme/>
  )
}

export default App
