import React, {FormEvent, useEffect, useState} from "react"
import "./App.css"
import {AppStateType} from "./bll/store"
import {Counter} from "./Components/Counter/Counter"
import {SetCounter} from "./Components/SetCounter/SetCounter"
import {useDispatch, useSelector} from "react-redux"
import {inc, init, max, res, StateType, ErrTypes, switcher, valueAC} from "./bll/reducer"

function App() {

    const {value, maxValue, initialValue, switchToSet} = useSelector<AppStateType, StateType>(state => state.root)
    const dispatch = useDispatch()

    let [error, setError] = useState<string>("")
    let [errorCode, setErrorCode] = useState<ErrTypes>("")

    useEffect(() => {
        let errMessage = ""
        let errCode: ErrTypes = ""

        if (initialValue < 0) {
            errMessage = "start value can't be less than 0"
            errCode = "INIT"
        }
        setError(errMessage)
        setErrorCode(errCode)
        if (maxValue < initialValue) {
            errMessage = "max value can't be less then start value"
            errCode = "MAX"
        }
        setError(errMessage)
        setErrorCode(errCode)
        if (maxValue === initialValue) {
            errMessage = "max value can't be equal to start value"
            errCode = "MAX"
        }
        setError(errMessage)
        setErrorCode(errCode)

    }, [maxValue, initialValue])

    useEffect(() => {
        dispatch(valueAC(initialValue))
    }, [initialValue])

    const incCounterValue = () => {
        dispatch(inc())
    }

    const resCounterValue = () => {
        dispatch(res())
    }

    const switchButtonHandler = () => {
        dispatch(switcher())
    }

    const setInitHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(init(+e.currentTarget.value))
    }
    const setMaxHandler = (e: FormEvent<HTMLInputElement>) => {
        dispatch(max(+e.currentTarget.value))
    }

    return (
        <div className="App">
            {!switchToSet
                ? <Counter
                    value={value}
                    increment={incCounterValue}
                    reset={resCounterValue}
                    error={value >= maxValue}
                    maxValue={maxValue}
                    initValue={initialValue}
                    setIsCounter={switchButtonHandler}
                />
                : <SetCounter
                    setIsCounter={switchButtonHandler}
                    maxVal={maxValue}
                    initVal={initialValue}
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
