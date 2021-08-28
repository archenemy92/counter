import {applyMiddleware, combineReducers, createStore} from "redux"
import {initState, mainReducer} from "./reducer"
import thunk from "redux-thunk"


// load string from localStarage and convert into an Object
// invalid output must be undefined

function initialValue() {
    const serialisedState = localStorage.getItem("initialValue")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
}

function maxValue() {
    const serialisedState = localStorage.getItem("maxValue")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved


// listen for store changes and use saveToLocalStorage to
// save them to localStorage

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    root: mainReducer
})


export const store = createStore(rootReducer, {
    root: {
        ...initState,
        initialValue: initialValue(),
        maxValue: maxValue(),
    }
}, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem("initialValue", JSON.stringify(store.getState().root.initialValue))
    localStorage.setItem("maxValue", JSON.stringify(store.getState().root.maxValue))
})