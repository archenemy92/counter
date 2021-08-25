import React, {FormEvent} from "react"
import style from "./SetCounter.module.css"
import {Button} from "../Button/ButtonComp"
import {Input} from "../Input/InputComp"
import {ErrTypes} from "../../App"

type SetCounterPropsType = {
    setIsCounter: () => void
    maxVal: number
    initVal: number
    setInitVal: (val: string) => void
    setMaxVal: (val: string) => void
    disable: boolean
    setInitHandler: (e: FormEvent<HTMLInputElement>) => void
    setMaxHandler: (e: FormEvent<HTMLInputElement>) => void
    error: string
    errorCode: ErrTypes
}

export const SetCounter: React.FC<SetCounterPropsType> = ({
                                                              setIsCounter,
                                                              initVal,
                                                              maxVal, disable,
                                                              setMaxHandler, setInitHandler,error,errorCode
                                                          }) => {

    return (

        <div className={style.setCounter_content}>
            <div className={style.setCounter_inputs}>
                <Input label={"start value"}
                       className={style.setCounter_input}
                       type={"number"}
                       inputValue={initVal}
                       setValue={setInitHandler}
                       errorText={error}
                       error={errorCode === "INIT"}

                />
                <Input label={"max value"}
                       className={style.setCounter_input}
                       type={"number"}
                       inputValue={maxVal}
                       setValue={setMaxHandler}
                       errorText={error}
                       error={errorCode === "MAX"}

                />
            </div>
            <Button
                callback={setIsCounter}
                className={style.setCounter_button}
                disabled={disable}
            >
                Set
            </Button>
        </div>
    )
}