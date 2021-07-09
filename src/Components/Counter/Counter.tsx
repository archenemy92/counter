import React from "react"
import {Button} from "../Button/ButtonComp"
import style from "./Counter.module.css"

type CounterType = {
    value: number
    increment: () => void
    reset: () => void
    error: boolean
    maxValue: number
    initVal: number
    setIsCounter:()=>void
}

export const Counter: React.FC<CounterType> = ({
                                                   value, initVal, increment,
                                                   maxValue, reset, error,
                                                   setIsCounter
                                               }) => {

    const styles = () => `${value === maxValue ? style.counter_maxValue : ""} ${style.counter_display}`

    return (
        <div className={style.counter_content}>
            <div className={styles()}>
                COUNT: {value}
            </div>
            {error && <div className={style.counter_error}>Max Value</div>}
            <div className={style.counter_buttons}>
                <Button className={style.counter_buttonInc}
                        callback={increment}
                        disabled={error}> Inc </Button>
                <Button className={style.counter_buttonRes}
                        callback={reset}
                        disabled={value === initVal}> Res </Button>
                <Button className={style.counter_buttonSet}
                        callback={setIsCounter}> Set </Button>
            </div>
        </div>
    )
}

