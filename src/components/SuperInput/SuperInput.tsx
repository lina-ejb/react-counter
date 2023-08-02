import React from 'react';
import s from '../Counter.module.css'

type SuperInputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: string
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              value,
                                                              ...rest
                                                          }) => {

    return (
        <div className={s.superInput}>

            <input
                type={'number'}
                value={value}
                {...rest}
            />
        </div>
    );
};

