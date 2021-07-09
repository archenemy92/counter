import React, {FormEvent, useEffect, useState} from "react"
import "./App.css"
import {Counter} from "./Components/Counter/Counter"
import {SetCounter} from "./Components/SetCounter/SetCounter"


export type ErrTypes = "MAX" | "INIT" | ""

function App() {
    let [MaxValue, setMaxValue] = useState(5)
    let [InitValue, setInitValue] = useState(0)

    let [value, setValue] = useState<number>(InitValue)

    let [isCounter, setIsCounter] = useState<boolean>(true)

    let [error, setError] = useState<string>("")
    let [errorCode, setErrorCode] = useState<ErrTypes>("")

    useEffect(() => {
        let errMessage = ""
        let errCode: ErrTypes = ""

        if (InitValue < 0) {
            errMessage = "start value can't be less than 0"
            errCode = "INIT"
        }
        setError(errMessage)
        setErrorCode(errCode)
        if (MaxValue < InitValue) {
            errMessage = "max value can't be less then start value"
            errCode = "MAX"
        }
        setError(errMessage)
        setErrorCode(errCode)
        if (MaxValue === InitValue) {
            errMessage = "max value can't be equal to start value"
            errCode = "MAX"
        }
        setError(errMessage)
        setErrorCode(errCode)

    }, [MaxValue, InitValue])

    useEffect(() => {
        setValue(InitValue)
    }, [InitValue])

    useEffect(() => {
        const max = localStorage.getItem("max") || 5
        const init = localStorage.getItem("init") || 0

        if (max) {
            setMaxValue(+max)
        }
        if (init) {
            setInitValue(+init)
        }
    }, [])

    const incValue = () => {
        setValue(value + 1)
    }

    const resValue = () => {
        setValue(InitValue)
    }

    const setVal = () => {
        setIsCounter(!isCounter)
    }

    const setMaxVal = (val: string) => {
        localStorage.setItem("max", val)
    }

    const setInitVal = (val: string) => {
        localStorage.setItem("init", val)
    }

    const setInitHandler = (e: FormEvent<HTMLInputElement>) => {
        setInitValue(InitValue = +e.currentTarget.value)
    }
    const setMaxHandler = (e: FormEvent<HTMLInputElement>) => {
        setMaxValue(MaxValue = +e.currentTarget.value)
    }

    return (
        <div className="App">
            {isCounter
                ? <Counter
                    value={value}
                    increment={incValue}
                    reset={resValue}
                    error={value >= MaxValue}
                    maxValue={MaxValue}
                    initVal={InitValue}
                    setIsCounter={setVal}
                />
                : <SetCounter
                    setIsCounter={setVal}
                    maxVal={MaxValue}
                    initVal={InitValue}
                    setMaxVal={setMaxVal}
                    setInitVal={setInitVal}
                    disable={!!error}
                    setInitHandler={setInitHandler}
                    setMaxHandler={setMaxHandler}
                    error={error}
                    errorCode={errorCode}
                />}
        </div>
    )
}

export default App
