import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {
    callback: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        className,
        callback,
        disabled,
        ...restProps

    }
) => {
    return (
        <button
            className={className}
            onClick={()=>callback()}
            disabled={disabled}
            {...restProps}

        />
    )
}