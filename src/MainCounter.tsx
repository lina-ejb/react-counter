import React, {useEffect, useState} from 'react';
import {CounterContainer} from "./components/CounterContainer";
import s from './components/Counter.module.css'
import {CounterSettingContainer} from "./components/CounterSettingContainer";

export const MainCounter = () => {

    const maxValueFromStorage = Number(localStorage.getItem('counter-value-max'))
    const startValueFromStorage = Number(localStorage.getItem('counter-value-start'))

    const [count, setCount] = useState(startValueFromStorage || 0)
    const [maxValue, setMaxValue] = useState(maxValueFromStorage|| 5)
    const [startValue, setStartValue] = useState( startValueFromStorage || 0)
    const [isShown, setIsShown] = useState(false);


    useEffect(() => {

        localStorage.setItem('counter-value-start', JSON.stringify(startValue))
        localStorage.setItem('counter-value-max', JSON.stringify(maxValue))

    }, [startValue, maxValue])



    const addCounter = () => {
        if (startValue < maxValue) {
            setCount(count + 1)
        }
    }

    const resetCounter = () => {
        setCount(startValue)
    }

    const toggleShow = () => {
        setIsShown(!isShown)
        setCount(startValue)
    }

    return (
        <div className={s.mainCounterContainer}>

            {!isShown &&

                <CounterContainer
                    count={count}
                    addCounter={addCounter}
                    resetCounter={resetCounter}
                    maxValue={maxValue}
                    toggleShow={toggleShow}

                />}

            {isShown &&

                <CounterSettingContainer
                    toggleShow={toggleShow}
                    count={count}
                    maxValue={maxValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}

                />}
        </div>
    );
};

