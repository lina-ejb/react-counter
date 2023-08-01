import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";


const rootReducer = combineReducers({
    counter: countReducer,

})

export const store = legacy_createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>
