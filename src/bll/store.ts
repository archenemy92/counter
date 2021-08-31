import {applyMiddleware, combineReducers, createStore} from "redux"
import {initState, counterReducer} from "./reducer"
import thunk from "redux-thunk"


// load string from localStorage and convert into an Object
// invalid output must be undefined

function initialValue() {
    const init = localStorage.getItem("initialValue")
    if (!init) return undefined
    return JSON.parse(init)

}

function maxValue() {
    const max = localStorage.getItem("maxValue")
    if (!max) return undefined
    return JSON.parse(max)
}

let counter = {
    ...initState,
    initialValue: initialValue(),
    maxValue: maxValue(),
}
// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved


// listen for store changes and use saveToLocalStorage to
// save them to localStorage

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, {
    counter: {
        ...initState,
        initialValue: initialValue(),
        maxValue: maxValue(),
    }
}, applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem("initialValue", JSON.stringify(store.getState().counter.initialValue))
    localStorage.setItem("maxValue", JSON.stringify(store.getState().counter.maxValue))
})