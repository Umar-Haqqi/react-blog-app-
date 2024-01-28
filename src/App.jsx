import { useState } from 'react'
import './App.css'

function App() {
  console.log("env: ", import.meta.env.VITE_APPWRITE_URL);

  const [count, setCount] = useState(0)

  return (
    <>
      <h2>ddd</h2>
    </>
  )
}

export default App
