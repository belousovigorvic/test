import './App.css'
import { useState } from 'react'
import Component from "./Component/Component.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Hello</h1>
            <h2>Hi</h2>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Click the button!</button>
            <input type="text"/>

            <Component />
        </>
    )
}

export default App
