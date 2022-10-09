import React, { useState, FC} from 'react'
import Meme from './pages/Meme'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Meme/>
  )
}

export default App
