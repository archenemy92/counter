import React, {DetailedHTMLProps, SelectHTMLAttributes} from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {

}

export const Select: React.FC = () => {
    return (
        <select/>
    )
}