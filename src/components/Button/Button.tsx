import React from 'react';

type ButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    name: string
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      name,
                                                      ...rest
                                                  }) => {
    return (
        <div >
            <button
                {...rest}
            >
                {name}
            </button>
        </div>
    );
};

