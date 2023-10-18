import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./count-reducer";
import {loadState, saveState} from "../localStorage";

const persistedState = loadState()

const rootReducer = combineReducers({
    counter: countReducer,

})

export const store = legacy_createStore(rootReducer, persistedState)

export type StateAppType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState(
        {counter: store.getState().counter}
    )
})