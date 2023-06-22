import './App.css'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Hello</h1>
            <h2>Hi</h2>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Click the button!</button>
        </>
    )
}

export default App
