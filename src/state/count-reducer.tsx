export type StateMainType = {
    count: number
    startValue: number
    maxValue: number
    isShown: boolean
}

export const initialCount: StateMainType = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    isShown: false
}

const INCREMENT_COUNTER = 'INCREMENT-COUNTER';
const RESET_COUNTER = 'RESET-COUNTER';
const CHANGE_START_VALUE = 'CHANGE-START-VALUE'
const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
const TOGGLE_COUNTER = 'TOGGLE-COUNTER'

type ActionCountType = IncrementTypeAC | ResetTypeAC | ChangeStartValueTypeAC | ChangeMaxValueTypeAC | ToggleCounterTypeAC

export const countReducer = (state: StateMainType = initialCount, action: ActionCountType): StateMainType => {
    switch (action.type) {

        case INCREMENT_COUNTER:

            return {
                ...state,
                count: state.count + 1
            }

        case RESET_COUNTER: {
            return {
                ...state,
                count: state.startValue
            }
        }
        case CHANGE_START_VALUE: {

            return {
                ...state,
                count: action.payload.startValue,
                startValue: action.payload.startValue
            }
        }
        case CHANGE_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        case TOGGLE_COUNTER: {
            return {
                ...state,
                isShown: !state.isShown
            }
        }
        default:
            return state

    }

}

export type IncrementTypeAC = ReturnType<typeof incActionCreator>
export const incActionCreator = () => {
    return {
        type: INCREMENT_COUNTER,

    } as const
}

export type ResetTypeAC = ReturnType<typeof resActionCreator>
export const resActionCreator = () => {
    return {
        type: RESET_COUNTER,

    } as const
}

export type ChangeStartValueTypeAC = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (startValue: number) => {
    return {
        type: CHANGE_START_VALUE,
        payload: {
            startValue
        }

    } as const
}

export type ChangeMaxValueTypeAC = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {
            maxValue
        }

    } as const
}

export type ToggleCounterTypeAC = ReturnType<typeof toggleCounterAC>
export const toggleCounterAC = () => {
    return {
        type: TOGGLE_COUNTER,

    } as const
}