import React, {DetailedHTMLProps, FormEvent, InputHTMLAttributes} from "react"
import style from "./InputComp.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = DefaultInputPropsType & {
    errorText?: string
    error: boolean
    label?: string
    inputValue: number
    setValue: (e: FormEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputTextPropsType> = (
    {
        type, error,
        label, className,
        value, inputValue,
        setValue,errorText,

        ...restProps
    }
) => {

    const finalInputClassName = `${error ? style.errorInput : ""} ${style.Input} ${className}`

    const onInputHandler = (e: FormEvent<HTMLInputElement>) => {
        setValue(e)
    }

    return (

        <label>
            <div className={style.label}>{label}</div>
            <input
                value={inputValue}
                type={type}
                min={-1}
                max={20}
                onInput={onInputHandler}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <span className={style.error}>{errorText}</span>}
        </label>
    )
}


