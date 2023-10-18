import {StateAppType} from "../state/store";
import {StateMainType} from "../state/count-reducer";


export const counterSelector = (state: StateAppType): StateMainType => state.counter