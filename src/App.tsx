import React, {useState} from "react"
import "./App.css"
import {Counter} from "./Components/Counter/Counter"

function App() {
    const MaxValue = 5
    const InitValue = 0

    const [value, setValue] = useState<number>(InitValue)

    const incValue = () => {
        setValue(value + 1)
    }

    const resValue = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <Counter value={value}
                     increment={incValue}
                     reset={resValue}
                     error={value >= 5}
            />
        </div>
    )
}

export default App
