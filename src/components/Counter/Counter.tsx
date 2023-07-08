import React from 'react';
import s from '../Counter.module.css'


type CounterPropsType = {
    count: number
    className: string
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        count,
                                                        className,
                                                    }) => {


    return (
        <div className={s.counter}>
            <span
                className={className}
            >
             {count}
            </span>
        </div>
    );
};

