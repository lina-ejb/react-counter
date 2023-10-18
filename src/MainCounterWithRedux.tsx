import React from 'react';
import {CounterContainer} from "./components/CounterContainer";
import s from './components/Counter.module.css'
import {CounterSettingContainer} from "./components/CounterSettingContainer";
import {StateMainType} from "./state/count-reducer";
import {useSelector} from "react-redux";
import {StateAppType} from "./state/store";
import {counterSelector} from "./selector/counterSelector";

export const MainCounterWithReducer = () => {

    const count = useSelector<StateAppType, StateMainType>(counterSelector)

    return (
        <div className={s.mainCounterContainer}>

            {!count.isShown &&
                <CounterContainer/>}

            {count.isShown &&
                <CounterSettingContainer/>}
        </div>
    );
};

