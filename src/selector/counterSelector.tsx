import {StateType} from "../state/store";
import {StateMainType} from "../state/count-reducer";


export const counterSelector = (state: StateType): StateMainType => state.counter