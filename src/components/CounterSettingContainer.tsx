import React, {ChangeEvent} from 'react';
import {Button} from "./Button/Button";
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput/SuperInput";


type CounterSettingContainerPropsType = {
    maxValue: number
    startValue: number
    count: number
    setMaxValue: (e: number) => void
    setStartValue: (e: number) => void
    toggleShow: () => void

}

export const CounterSettingContainer: React.FC<CounterSettingContainerPropsType> = ({
                                                                                        maxValue,
                                                                                        startValue,
                                                                                        count,
                                                                                        setMaxValue,
                                                                                        setStartValue,
                                                                                        toggleShow,

                                                                                    }) => {
    const maxOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (setMaxValue) setMaxValue(Number(e.currentTarget.value))

    }
    const startOnChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (setStartValue) setStartValue(Number(e.currentTarget.value))
    }

    const valueToCounterHandler = () => {
        toggleShow()
    }

    const disabledButton = false
    const isIncorrectValue = startValue >= maxValue
    const isIncorrectInputValue = startValue < 0 || isIncorrectValue
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
                    value={maxValue.toString()}
                    count={count}
                    className={inputClassName}

                />

                <label
                    htmlFor={'startValue'}>
                    start value:
                </label>
                <SuperInput
                    id={'startValue'}
                    value={startValue.toString()}
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

