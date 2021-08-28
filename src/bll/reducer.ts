export type ErrTypes = "MAX" | "INIT" | ""

type SwitcherType = ReturnType<typeof switcher>
type IncType = ReturnType<typeof inc>
type ResType = ReturnType<typeof res>
type InitType = ReturnType<typeof init>
type MaxType = ReturnType<typeof max>
type ValueType = ReturnType<typeof valueAC>

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


export const mainReducer = (state = initState, action: ActionsType) => {
    switch (action.type) {
        case "SWITCH": {
            return {
                ...state,
                switchToSet: !state.switchToSet
            }
        }
        case "INC": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "RES": {
            return {
                ...state,
                value: state.initialValue
            }
        }
        case "INIT": {
            return {
                ...state,
                initialValue: action.val
            }
        }
        case "MAX": {
            return {
                ...state,
                maxValue: action.val
            }
        }
        case "VALUE": {
            return {
                ...state,
                value: action.val
            }
        }

        default :
            return state

    }
}

export const switcher = () => {
    return {
        type: "SWITCH"
    } as const
}

export const inc = () => {
    return {
        type: "INC"
    } as const
}
export const res = () => {
    return {
        type: "RES"
    } as const
}
export const init = (val: number) => {
    return {
        type: "INIT",
        val
    } as const
}
export const max = (val: number) => {
    return {
        type: "MAX",
        val
    } as const
}
export const valueAC = (val: number) => {
    return {
        type: "VALUE",
        val
    } as const
}




