export type ErrTypes = "MAX" | "INIT" | ""

type SwitcherType = ReturnType<typeof switcher>
type IncType = ReturnType<typeof increment>
type ResType = ReturnType<typeof resetValue>
type InitType = ReturnType<typeof setInitValue>
type MaxType = ReturnType<typeof setMaxValue>
type ValueType = ReturnType<typeof setValue>

type ActionsType = SwitcherType
    | IncType
    | ResType
    | InitType
    | MaxType
    | ValueType


export type StateType = {
    initialValue: number
    maxValue: number
    value: number
    switchToSet: boolean
}

export const initState: StateType = {
    initialValue: 0,
    maxValue: 5,
    value: 0,
    switchToSet: false,
}


export const counterReducer = (state = initState, action: ActionsType) => {
    switch (action.type) {
        case "COUNTER_SWITCH": {
            return {
                ...state,
                switchToSet: !state.switchToSet
            }
        }
        case "COUNTER_INCREMENT_VALUE": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "COUNTER_RESET_VALUE": {
            return {
                ...state,
                value: state.initialValue
            }
        }
        case "COUNTER_SET_INITIAL_VALUE": {
            return {
                ...state,
                initialValue: action.value
            }
        }
        case "COUNTER_SET_MAX_VALUE": {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case "COUNTER_SET_VALUE": {
            return {
                ...state,
                value: action.value
            }
        }

        default :
            return state

    }
}

export const switcher = () => {
    return {
        type: "COUNTER_SWITCH"
    } as const
}

export const increment = () => {
    return {
        type: "COUNTER_INCREMENT_VALUE"
    } as const

}
export const resetValue = () => {
    return {
        type: "COUNTER_RESET_VALUE"
    } as const
}
export const setInitValue = (value: number) => {
    return {
        type: "COUNTER_SET_INITIAL_VALUE",
        value
    } as const
}
export const setMaxValue = (value: number) => {
    return {
        type: "COUNTER_SET_MAX_VALUE",
        value
    } as const
}
export const setValue = (value: number) => {
    return {
        type: "COUNTER_SET_VALUE",
        value
    } as const
}




