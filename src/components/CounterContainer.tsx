import React from 'react';
import '../App.css';
import {Counter} from "./Counter/Counter";
import s from './Counter.module.css'
import {Button} from "./Button/Button";

type CounterContainerPropsType = {
    count: number
    addCounter: () => void
    resetCounter: () => void
    maxValue: number
    toggleShow: () => void
}

export const CounterContainer: React.FC<CounterContainerPropsType> = ({
                                                                          count,
                                                                          addCounter,
                                                                          resetCounter,
                                                                          maxValue,
                                                                          toggleShow,
                                                                      }) => {


    const isMaxValueCount = count === maxValue
    const buttonStyle = isMaxValueCount ? s.disabledButton : s.button
    const counterStyle = isMaxValueCount ? s.limitedCounterValue : s.outputCounterValue


    return <div className={s.counterContainer}>
        <Counter
            count={count}
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


