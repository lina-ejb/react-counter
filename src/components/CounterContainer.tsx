import React from 'react';
import '../App.css';
import {Counter} from "./Counter/Counter";
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {StateAppType} from "../state/store";
import {incActionCreator, resActionCreator, StateMainType, toggleCounterAC} from "../state/count-reducer";


export const CounterContainer = () => {

    const addCounter = () => {
        if (count.startValue < count.maxValue) {
            dispatch(incActionCreator())
        }
    }

    const resetCounter = () => {
        dispatch(resActionCreator())
    }

    const dispatch = useDispatch()
    const count = useSelector<StateAppType, StateMainType>((state) => state.counter)

    const toggleShow = () => {
        dispatch(toggleCounterAC())
    }

    const isMaxValueCount = count.count === count.maxValue
    const buttonStyle = isMaxValueCount ? s.disabledButton : s.button
    const counterStyle = isMaxValueCount ? s.limitedCounterValue : s.outputCounterValue


    return <div className={s.counterContainer}>
        <Counter

            count={count.count}
            className={counterStyle}
        />

        <div className={s.buttonContainer}>
            <Button
                name={'inc'}
                onClick={addCounter}
                disabled={isMaxValueCount}
                className={buttonStyle}

            />
            <Button
                name={'reset'}
                onClick={resetCounter}
                className={s.button}

            />
            <Button
                name={'set'}
                className={s.button}
                onClick={toggleShow}

            />
        </div>

    </div>
}


