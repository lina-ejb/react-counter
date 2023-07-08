import React, {ChangeEvent} from 'react';
import s from '../Counter.module.css'

type SuperInputPropsType = {
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    count?: number
    className: string

}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              id,
                                                              value,
                                                              onChange,
                                                              className
                                                          }) => {

    return (
        <div className={s.superInput}>

            <input
                id={id}
                type={'number'}
                value={value}
                onChange={onChange}
                className={className}
            />

        </div>
    );
};

