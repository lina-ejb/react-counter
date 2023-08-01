import React, {ChangeEvent} from 'react';
import {Button} from "./Button/Button";
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../state/store";
import {changeMaxValueAC, changeStartValueAC, StateMainType, toggleCounterAC} from "../state/count-reducer";
import {counterSelector} from "../selector/counterSelector";


export const CounterSettingContainer = () => {

    const dispatch = useDispatch()
    const count = useSelector<StateType, StateMainType>(counterSelector)

    const maxOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    }

    const startOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(Number(e.currentTarget.value)))
    }

    const valueToCounterHandler = () => {
        dispatch(toggleCounterAC())
    }

    const disabledButton = false
    const isIncorrectValue = count.startValue >= count.maxValue
    const isIncorrectInputValue = count.startValue < 0 || isIncorrectValue
    const inputClassName = isIncorrectValue ? s.errorInput : s.input
    const startInputCLassName = isIncorrectInputValue ? s.errorInput : s.input
    const buttonSettingClassName = disabledButton || isIncorrectInputValue ? s.disabledButton : s.button

    return (
        <div className={s.counterContainer}>
            <div className={s.settingValue}>
                <label
                    htmlFor="maxValue">
                    max value:
                </label>
                <SuperInput
                    id={'maxValue'}
                    onChange={maxOnChangeCallback}
                    value={count.maxValue}
                    className={inputClassName}
                />

                <label
                    htmlFor={'startValue'}>
                    start value:
                </label>
                <SuperInput
                    id={'startValue'}
                    value={count.startValue}
                    onChange={startOnChangeCallback}
                    className={startInputCLassName}

                />
            </div>

            <div className={s.buttonContainer}>
                <Button
                    name={'set'}
                    className={buttonSettingClassName}
                    onClick={valueToCounterHandler}
                    disabled={isIncorrectInputValue}
                />

            </div>
        </div>
    );
};

