import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import style from "./Counter.module.css"

type CounterType = {
    value: number
    increment: () => void
    reset: () => void
    error: boolean
}

export const Counter: React.FC<CounterType> = ({value, increment, reset, error}) => {

    const styles = () => `${value === 5 ? style.counter_maxValue : ""} ${style.counter_display}`

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
                        disabled={value === 0}> Res </Button>
            </div>
        </div>
    )
}

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = (
    {
        className,
        callback,
        ...restProps
    }
) => {
    return (
        <button
            className={className}
            onClick={callback}
            {...restProps}
        />
    )
}